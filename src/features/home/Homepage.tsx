import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Image,
  Button,
  Segment,
  Icon,
} from "semantic-ui-react";

export default function Homepage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          ></Image>
          Contacts Management
        </Header>
        <Button size="huge" inverted as={Link} to="/contacts">Get started!
          <Icon name="caret right"></Icon>
        </Button>
      </Container>
    </Segment>
  );
}
