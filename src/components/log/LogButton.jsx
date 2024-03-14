import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
        <DropdownButton id="dropdown-basic-button" title="Adoptá">
          <Dropdown.Item onClick={handleLogin}>Ingresá</Dropdown.Item>
          <Dropdown.Item onClick={handleRegister}>Registrate</Dropdown.Item>
        </DropdownButton>
      )}

      {userLog && (
        <>
          <Avatar />

          <DropdownButton
            id="dropdown-basic-button"
            className="p-0 m-0 "
            variant="warning"
            style={{ border: "none", size: "10px" }}
          >
            <Dropdown.Item onClick={handleLogout}>Salir</Dropdown.Item>
          </DropdownButton>
        </>
      )}
    </>
  );
}

Log.propTypes = {
  userLog: PropTypes.bool.isRequired,
};
