import { Outlet, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "./layout/nav/NavBar";
import Homepage from "../features/home/Homepage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Homepage />
      ) : (
        <>
          <NavBar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
