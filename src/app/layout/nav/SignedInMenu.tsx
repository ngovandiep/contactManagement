import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

type Props = {
  setAuth: (value: boolean) => void;
};
export default function SignedInMenu({ setAuth }: Props) {
  const navigate = useNavigate();

  function handleSignedOut() {
    setAuth(false);
    navigate("/");
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png"></Image>
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-contact"
            text="Create contact"
            icon="plus"
          />
          <Dropdown.Item text="My profile" icon="user" />
          <Dropdown.Item
            text="Sign out"
            icon="power"
            onClick={() => handleSignedOut()}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
