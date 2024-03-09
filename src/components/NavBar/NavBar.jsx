import  { useState, useEffect } from "react";
import Style from "./NavBar.module.css";
import { Login } from "../login/Login";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [menu, setMenu] = useState(true);
  const [small, setSmall] = useState(false);

  const handleResize = () => {
    if (window.screen.width < 700) {
      setMenu(false);

      setSmall(true);
    } else {
      setMenu(true);
      setSmall(false);
    }
  };

  useEffect(() => {
    handleResize();
  
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [small]);

  function Close() {
    setMenu(!menu);
  }
  const handleLinkClick = (link) => {
    setActiveLink(link);

    small && Close();
  };

 

  return (
    <div className={Style.headNav}>
      <div className={Style.logo}>logo</div>
      {menu && (
        <nav className={Style.links}>
          <span>
            <a
              className={activeLink === "Inicio" ? Style.active : ""}
              href="#Inicio"
              onClick={() => handleLinkClick("Inicio")}
            >
              Inicio
            </a>
          </span>
          <span>
            <a
              href="#adoptar"
              className={activeLink === "adoptar" ? Style.active : ""}
              onClick={() => handleLinkClick("adoptar")}
            >
              Adoptar
            </a>
          </span>
          <span>
            <a
              href="#perdidos"
              className={activeLink === "perdidos" ? Style.active : ""}
              onClick={() => handleLinkClick("perdidos")}
            >
              Perdidos
            </a>
          </span>
          <span>
            <a
              href="#reportar"
              className={activeLink === "reportar" ? Style.active : ""}
              onClick={() => handleLinkClick("reportar")}
            >
              Reportar
            </a>
          </span>
          <span>
            <a
              href="#contact"
              className={activeLink === "contact" ? Style.active : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </span>
        </nav>
      )}
      <div className={Style.mobile}>
        <i
          className={menu ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setMenu(!menu)}
        ></i>
      </div>
      <Login></Login>
    </div>
  );
}

