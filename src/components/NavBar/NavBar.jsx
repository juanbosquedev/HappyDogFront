import PropTypes from "prop-types";
import Style from "./NavBar.module.css";
import Log from "../log/LogButton";

export default function NavBar({ userLog }) {
  return (
    <div className={Style.headNav}>
      <div className={Style.logo}>logo</div>

      <Log userLog={userLog}></Log>
    </div>
  );
}

NavBar.propTypes = {
  userLog: PropTypes.bool.isRequired,
};
