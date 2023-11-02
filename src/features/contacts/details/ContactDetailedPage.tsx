import { Grid } from 'semantic-ui-react';
import ContactDetailedHeader from './ContactDetailedHeader';
import ContactDetailedInfo from './ContactDetailedInfo';
 
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/store/store';

export default function ContactDetailedPage() {
  const {id} = useParams();
  const contact = useAppSelector(state => state.contacts.contacts.find(e => e.id === id));

  if (!contact) return <h2>Contact not found</h2>

  return (
    <Grid>
      <Grid.Column width={12}>
        <ContactDetailedHeader contact={contact} />
        <ContactDetailedInfo contact={contact} />
      </Grid.Column>
    </Grid>
  )
}