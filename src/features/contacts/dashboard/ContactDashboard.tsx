import { Grid } from "semantic-ui-react";
import ContactList from "./ContactList";
import { useAppSelector } from "../../../app/store/store";
import ContactFilterForm from "../form/ContactFilterForm";

export default function ContactDashboard() {
  const { contactsFiltered } = useAppSelector((state) => state.contacts);

  return (
    <Grid>
      <Grid.Column width={10}>
        <ContactList contacts={contactsFiltered} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ContactFilterForm />
      </Grid.Column>
    </Grid>
  );
}
