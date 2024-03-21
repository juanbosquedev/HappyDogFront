import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Login from "./components/log/Login";
import RegisterPage from "./components/log/Register";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import Banner from "./components/banner/Banner";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [entering, setEntering] = useState(false);
  const userLog = useSelector((state) => state.userLogged.logged);
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === "/entrar" || location.pathname === "/registrarse") {
      setEntering(true);
    } else {
      setEntering(false);
    }
  }, [location.pathname, entering, setEntering]);

  return (
    <>
      <NavBar userLog={userLog} entering={entering} />
      <Routes>
      <Route exact path="/" element={<Home />} />

        <Route exact path="/entrar" element={<Login setEntering={setEntering}/>} />
        <Route path="/registrarse" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Banner /> */}
    </>
  );
}

export default App;
