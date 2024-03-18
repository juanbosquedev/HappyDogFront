import PropTypes from "prop-types";
import Style from "./NavBar.module.css";
import Log from "../log/LogButton";
import { useSelector } from "react-redux";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  const userLog = useSelector((state) => state.userLogged.logged);

  

  return (
    <Navbar className={`${Style.headNav} bg-body-tertiary`}>
      <Container className="col-10 pt-4 ms-5">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="col-12">
            <Log  userLog={userLog}></Log>
            <Nav.Link className="ms-5"  href="#home"> INICIO</Nav.Link>
            <Nav.Link className="me-2 " href="#adopt">ADOPTAR</Nav.Link>
            <Nav.Link className="me-0 col-2" href="#adopt">QUIENES SOMOS</Nav.Link>

           
            <Nav.Link className="me-0  col-3"  to={userLog ? "formadopt" : "login"}>
        DAR EN ADOPCIÓN
      </Nav.Link>
          </Nav>
          <Navbar.Brand className="  ms-5 " href="#home"> 
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
};
