import PropTypes from "prop-types";
import Style from "./NavBar.module.css";
import Log from "../log/LogButton";
import CustomModalDog from "../../presentacionalComponents/customModalDog/CustomModalDog";
import Swal from "sweetalert2"; // Importa SweetAlert

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function NavBar({ entering, userLog }) {
  useEffect(() => {}, [userLog]);
  const userLogg = useSelector((state) => state.userLogged.logged);
  
  const [show, setShow] = useState(false);
  const isCurrentUserOwner = false;

  const handleClose = () => setShow(false);
 
  const handleShow = () => {
    if (userLogg) {
   

      setShow(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "No autorizado",
        text: "Debes iniciar sesión para dar en adopción",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <Navbar className={`${Style.headNav} fixed-top bg-body-tertiary`}>
      <Container className="col-10 pt-3 ms-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="col-12 ps-4 pt-2">
            <Log userLog={userLog}></Log>
            <Nav.Link className="ms-5" href="#home" disabled={entering}>
              INICIO
            </Nav.Link>
            <Nav.Link className="me-2" href="#adopt" disabled={entering}>
              ADOPTAR
            </Nav.Link>
            <Nav.Link className="me-0 col-2" href="#about" disabled={entering}>
              QUIENES SOMOS
            </Nav.Link>

            <Nav.Link
              className="me-0 col-3"
              onClick={handleShow}
              disabled={entering}
            >
              DAR EN ADOPCIÓN
            </Nav.Link>
          </Nav>
          <Navbar.Brand className="ms-5 ps-3 pt-0 d-flex align-items-end pe-5 " href="#adopt">
            <h6 className={Style.navHead}>
              Happy <br/>Dog
            </h6>
            <img
              style={{ height: "55px" }}
              src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710794343/happydog/logoColor_acvpra.png"
              alt="image-logo"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
      <CustomModalDog
        show={show}
        handleClose={handleClose}
        dog=""
        editable={isCurrentUserOwner}
        createDog={true}
      />
    </Navbar>
  );
}

NavBar.propTypes = {
  userLog: PropTypes.bool,
  entering: PropTypes.bool,
};
