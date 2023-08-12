import React from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "../Components/Cart/Cart";
import { Link } from "react-router-dom";
import { CartState } from "../Store/Context";

const NavBar = () => {
  const {
    state: { cart },
  } = CartState();
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/plasticine/100/cleats.png"
              alt="cleats"
            />
            Shoes Selling App
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ gap: 20, fontWeight: "bold", marginLeft: 40 }}
          >
            <Link to="/home">Home</Link>
            <Link to="/">Store</Link>
            <Link to="/addshoe">Add Shoes</Link>
          </Nav>
        </Container>
        <Container style={{ display: "flex", justifyContent: "right" }}>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            CART<Badge>{cart.length}</Badge>
          </Button>

          <Cart show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
