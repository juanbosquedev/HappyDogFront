import PropTypes from "prop-types";
import Style from "./NavBar.module.css";
import Log from "../log/LogButton";
import { Link } from "react-router-dom";
import{ useSelector }from "react-redux"

export default function NavBar() {
  const userLog = useSelector((state) => state.userLogged.logged);
  return (
    <div>

    <div className={Style.headNav}>
      <div className={Style.logo}><img className="rounded" style={{height:"60px"}} src="https://res.cloudinary.com/dzux3ynpe/image/upload/v1710648715/happydog/j4vuozqbmrhqemkt2wnv.png" alt="" /></div>
      <Link to="#inicio">
 INICIO
  </Link>

<Link to="formadopt">
  NUESTRA COMUNIDAD
  </Link>
  <Link to="formadopt">
 DAR EN ADPCION
  </Link>
  <Link to="formadopt">
 ADOPTAR
  </Link>
      <Log userLog={userLog}></Log>
    </div>
    

    </div>
  );
}

NavBar.propTypes = {
  userLog: PropTypes.bool,
};
