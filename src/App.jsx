import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/log/Login";
import RegisterPage from "./components/log/Register";
import NavBar from "./components/navBar/NavBar";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {

  const userLog = useSelector((state) => state.userLogged.logged);
  useEffect(()=>{},[userLog])
 console.log(userLog, "userlog app")
  return (
    <>
      <NavBar userLog={userLog}/>
      <Routes>
      <Route exact path="/home" element={<App />}></Route>

        <Route path="/entrar" element={<Login />}></Route>
        <Route path="/registrarse" element={<RegisterPage />}></Route>

        <Route path="/*" element={<Navigate to="/home/*"></Navigate>}></Route>
      </Routes>
    </>
  );
}

export default App;
