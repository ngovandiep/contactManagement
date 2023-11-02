import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";
import SignedOutButtons from "./SignedOutButtons";

export default function NavBar() {
  const [auth, setAuth] = useState(false);

  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo"></img>
        </MenuItem>
        <MenuItem name="Contacts" as={NavLink} to="/contacts"></MenuItem>
        <MenuItem>
          <Button
            as={NavLink}
            to={"/create-contact"}
            floated="right"
            positive={true}
            inverted={true}
            content="Create Contact"
          />
        </MenuItem>
        {auth ? (
          <SignedInMenu setAuth={setAuth} />
        ) : (
          <SignedOutButtons setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
}
