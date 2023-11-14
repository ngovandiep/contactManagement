import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { contactsFilter, clearFilter } from "../contactSlice";
import { groupOptions } from "./groupOptions";
import { useEffect } from "react";
import { AppContact } from "../../../app/types/contact";

export default function ContactFilterForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const { id } = useParams();

  const contact = useAppSelector((state) =>
    state.contacts.contacts.find((e) => e.id === id)
  );
  const dispatch = useAppDispatch();

  function onSubmit() {
    reset();
    dispatch(clearFilter());
  }

  const values = getValues();
  function handleFilter(e: any) {
    dispatch(contactsFilter({ ...values, ...e }));
  }

  useEffect(() => {
    return () => {
      dispatch(clearFilter());
    };
  }, []);

  return (
    <Segment clearing>
      <Header content="Contact details Filter" sub color="teal" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          placeholder="Contact name"
          defaultValue={""}
          {...register("name")}
          onChange={(e) => {
            handleFilter({ name: e.target.value });
          }}
        />
        <Controller
          name="group"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Form.Select
              options={groupOptions}
              placeholder="Group"
              clearable
              {...field}
              onChange={(_, d) => {
                setValue("group", d.value);
                handleFilter({ group: d.value });
              }}
            />
          )}
        />

        <Form.Input
          placeholder="Phone"
          defaultValue={""}
          {...register("phone")}
          onChange={(e) => {
            handleFilter({ phone: e.target.value });
          }}
        />

        <Form.Input
          placeholder="Email"
          defaultValue={""}
          {...register("email")}
          onChange={(e) => {
            handleFilter({ email: e.target.value });
          }}
        />

        <Header sub content="Location Filter" color="teal" />
        <Form.Input
          placeholder="Address"
          defaultValue={contact?.address || ""}
          {...register("address")}
          onChange={(e) => {
            handleFilter({ address: e.target.value });
          }}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          value={"clear"}
          floated="right"
          content="Clear"
        />
      </Form>
    </Segment>
  );
}
