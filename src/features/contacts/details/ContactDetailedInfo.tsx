import { Segment, Grid, Icon } from "semantic-ui-react";
import { AppContact } from "../../../app/types/contact";

type Props = {
  contact: AppContact;
};

export default function ContactDetailedInfo({ contact }: Props) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{contact.summary}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="phone" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{contact.phone}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="mail" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{contact.email}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="birthday" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{contact.birthday}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{contact.address}</span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}
