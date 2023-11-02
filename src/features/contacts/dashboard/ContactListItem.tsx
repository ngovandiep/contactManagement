import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Item,
  ItemGroup,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { useAppDispatch } from "../../../app/store/store";
import { AppContact } from "../../../app/types/contact";
import { deleteContact } from "../contactSlice";

type Props = {
  contact: AppContact;
};

export default function ContactListItem({ contact }: Props) {
  const dispatch = useAppDispatch();

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image
              size="tiny"
              circular
              src={contact.photoURL || "/user.png"}
            />
            <Item.Content>
              <Item.Header>{contact.name}</Item.Header>
              <Item.Description>{contact.summary}</Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="birthday" /> {contact.birthday.toString()} 
          <Icon name="marker" /> {contact.address}
        </span>
      </Segment>

      <Segment clearing>
        <Button
          onClick={() => dispatch(deleteContact(contact.id))}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          as={Link}
          to={`/contacts/${contact.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </SegmentGroup>
  );
}
