import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "./assets/logo.jpg";

const stylesLogo = {
  img: {
    height: 35,
  },
};

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <img
            src={logo}
            alt="Imagen de logo forma de torta"
            style={stylesLogo.img}
          />
          <Navbar.Brand href="/">Confitería React</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={"/category/tortas"} className="NavLinkStyle">
                Tortas
              </NavLink>
              <NavLink to={"/category/panaderia"} className="NavLinkStyle">
                Panadería
              </NavLink>
              <NavLink to={"/category/salados"} className="NavLinkStyle">
                Salados
              </NavLink>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
