import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { NavDropdown } from "react-bootstrap";

import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/actionCreator";

export default function Log({ userLog }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/entrar");
  };

  const handleRegister = () => {
    navigate("/registrarse");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };

  return (
    <>
      {!userLog && (
        <>
          

          <NavDropdown id="basic-nav-dropdown" className="">
            <NavDropdown.Item onClick={handleLogin}>Ingresá</NavDropdown.Item>
            <NavDropdown.Item onClick={handleRegister}>
              Registrate
            </NavDropdown.Item>
          </NavDropdown>
          <Avatar  />
        </>
      )}

      {userLog && (
        <>
          <Avatar />
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item onClick={handleLogout}>Salir</NavDropdown.Item>
          </NavDropdown>
        </>
      )}
    </>
  );
}

Log.propTypes = {
  userLog: PropTypes.bool.isRequired,
};
