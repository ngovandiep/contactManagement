import { Link } from "react-router-dom";
import { Segment, Item, Header, Button, Image } from "semantic-ui-react";
import { AppContact } from "../../../app/types/contact";

type Props = {
  contact: AppContact;
};

export default function ContactDetailedHeader({ contact }: Props) {
  const contactImageStyle = {
    filter: "brightness(30%)",
  };

  const contactImageTextStyle = {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "100%",
    height: "auto",
    color: "white",
  };

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/groupImages/${contact.group}.jpg`}
          fluid
          style={contactImageStyle}
        />

        <Segment basic style={contactImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                circular
                src={contact.photoURL || "/user.png"}
              />
              <Item.Content style={{ display: "flex", alignSelf: "center" }}>
                <Header
                  size="huge"
                  content={contact.name}
                  style={{ color: "white" }}
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom" style={{ display: "inline-table" }}>
        <Button
          as={Link}
          to={`/manage/${contact.id}`}
          color="orange"
          floated="right"
        >
          Manage Contact
        </Button>
      </Segment>
    </Segment.Group>
  );
}
