import { AppContact } from "../../../app/types/contact";
import ContactListItem from "./ContactListItem";

type Props = {
  contacts: AppContact[];
};

export default function ContactList({ contacts }: Props) {
  return (
    <>
      {contacts?.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </>
  );
}
