import PropTypes from "prop-types";
import Style from "./NavBar.module.css";
import Log from "../log/LogButton";
// import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";

export default function NavBar({ entering, userLog }) {
  useEffect(() => {}, [userLog]);

  return (
    <Navbar className={`${Style.headNav} bg-body-tertiary`}>
      <Container className="col-10 pt-3 ms-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="col-12 pt-2">
            <Log userLog={userLog}></Log>
            <Nav.Link className="ms-5" href="#home" disabled={entering}>
              INICIO
            </Nav.Link>
            <Nav.Link className="me-2" href="#adopt" disabled={entering}>
              ADOPTAR
            </Nav.Link>
            <Nav.Link className="me-0 col-2" href="#adopt" disabled={entering}>
              QUIENES SOMOS
            </Nav.Link>

            <Nav.Link
              className="me-0 col-3"
              href={userLog ? "formadopt" : "entrar"}
              disabled={entering}
            >
              DAR EN ADOPCIÓN
            </Nav.Link>
          </Nav>
          <Navbar.Brand className="ms-5 pt-0" href="#home">
            <img
              style={{ height: "55px" }}
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710794343/happydog/logoColor_acvpra.png"
              alt="image-logo"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  userLog: PropTypes.bool,
  entering: PropTypes.bool,
};

NavBar.propTypes = {
  userLog: PropTypes.bool,
};
