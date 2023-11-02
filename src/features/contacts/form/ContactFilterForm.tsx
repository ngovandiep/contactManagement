import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import {
  groupFilter,
  phoneFilter,
  nameFilter,
  clearFilter,
  emailFilter,
  addressFilter,
} from "../contactSlice";
import { groupOptions } from "./groupOptions";

export default function ContactFilterForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { isSubmitting },
  } = useForm();

  let { id } = useParams();

  const contact = useAppSelector((state) =>
    state.contacts.contacts.find((e) => e.id === id)
  );
  const dispatch = useAppDispatch();

  function onSubmit() {
    reset();
    dispatch(clearFilter());
  }

  return (
    <Segment clearing>
      <Header content="Contact details Filter" sub color="teal" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          placeholder="Contact name"
          defaultValue={""}
          {...register("name")}
          onChange={(e) => {
            dispatch(nameFilter(e.target.value));
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
                dispatch(groupFilter(d.value));
              }}
            />
          )}
        />

        <Form.Input
          placeholder="Phone"
          defaultValue={""}
          {...register("phone")}
          onChange={(e) => {
            dispatch(phoneFilter(e.target.value));
          }}
        />

        <Form.Input
          placeholder="Email"
          defaultValue={""}
          {...register("email")}
          onChange={(e) => {
            dispatch(emailFilter(e.target.value));
          }}
        />

        <Header sub content="Location Filter" color="teal" />
        <Form.Input
          placeholder="Address"
          defaultValue={contact?.address || ""}
          {...register("address")}
          onChange={(e) => {
            dispatch(addressFilter(e.target.value));
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
