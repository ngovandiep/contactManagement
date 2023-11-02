import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { createContact, updateContact } from "../contactSlice";
import { createId } from "@paralleldrive/cuid2";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { groupOptions } from "./groupOptions";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  let { id } = useParams();
  const contact = useAppSelector((state) =>
    state.contacts.contacts.find((e) => e.id === id)
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit(data: FieldValues) {
    id = id ?? createId();
    contact
      ? dispatch(
          updateContact({
            ...contact,
            ...data,
            birthday: data.birthday.toDateString("yyyy/MM/dd"),
          })
        )
      : dispatch(
          createContact({
            ...data,
            id: id,
            photoURL: "",
            birthday: data.birthday.toDateString("yyyy/MM/dd"),
          })
        );
    navigate(`/contacts/${id}`);
  }

  return (
    <Segment clearing>
      <Header content="Contact details" sub color="teal" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          placeholder="Contact name"
          defaultValue={contact?.name || ""}
          {...register("name", { required: true })}
          error={errors.name && "Name is required"}
        />
        <Controller
          name="group"
          control={control}
          rules={{ required: "Group is required" }}
          defaultValue={contact?.group}
          render={({ field }) => (
            <Form.Select
              options={groupOptions}
              placeholder="Group"
              clearable
              {...field}
              onChange={(_, d) =>
                setValue("group", d.value, { shouldValidate: true })
              }
              error={errors.group && errors.group.message}
            />
          )}
        />

        <Form.Input
          placeholder="Phone"
          defaultValue={contact?.phone || ""}
          {...register("phone", { required: true })}
          error={errors.phone && "Phone is required"}
        />

        <Form.Input
          placeholder="Email"
          defaultValue={contact?.email || ""}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          error={errors.email && "Email is required"}
        />

        <Form.Field>
          <Controller
            name="birthday"
            control={control}
            rules={{ required: "Birthday is required" }}
            defaultValue={(contact && new Date(contact.birthday)) || null}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(value) =>
                  setValue("birthday", value, { shouldValidate: true,  })
                }
                dateFormat="yyyy/MM/dd"
               placeholderText="Birthday"
              />
            )} 
          />
        </Form.Field>
        <Form.TextArea
          placeholder="Summary"
          defaultValue={contact?.summary || ""}
          {...register("summary", { required: "Summary is required" })}
          error={errors.summary && errors.summary.message}
        />
        <Header sub content="Location details" color="teal" />
        <Form.Input
          placeholder="Address"
          defaultValue={contact?.address || ""}
          {...register("address", { required: "Address is required" })}
          error={errors.address && errors.address.message}
        />

        <Button
          loading={isSubmitting}
          disabled={!isValid}
          type="submit"
          floated="right"
          positive
          content="Submit"
        />
        <Button
          disabled={isSubmitting}
          as={Link}
          to="/contacts"
          type="button"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
