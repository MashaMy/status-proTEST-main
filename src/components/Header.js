import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import logot from "../Asserts/logot.jpg";
import ikonteg from "../Asserts/ikonteg.png";

const Styles = styled.div`
  .navbar {
    display: flex;
    justify-content: center;
  }
  .navbar-brand,
  .navbar-nav .nav-link,
  a {
    font-size: large;
    padding: 6px;
    text-decoration: none;
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
  button {
    text-decoration: none;
    font-size: large;
    padding: 6px;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }
`;

export default function Header() {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavbarBrand>
          <Link to="/">
            <img src={logot} alt="foto" style={{ height: "55px" }} />
          </Link>
        </NavbarBrand>

        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="mx-3" as={Link} to="/">
              Главная
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/about">
              О нас
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/portfolio">
              Портфолио
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/partner">
              Партнеры
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/otziv">
              Видео
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/contact">
              Контакты
            </Nav.Link>
            <a
              className="mx-3"
              href="https://chat.whatsapp.com/ILwcS1gM8rK4iJj6eTEAZN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать дизайнеру
              <img width="25" height="31" src={ikonteg} alt="tel" />
            </a>
            <a className="mx-3" href="tel:+79631612833">
              +7 963 161 28 33
            </a>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </Styles>
  );
}

