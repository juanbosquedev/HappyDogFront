import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/log/Login";
import RegisterPage from "./components/log/Register";
import NavBar from "./components/navBar/NavBar";
import About from "./components/aboutUs/About";
import Footer from "./components/footer/Footer";
import Banner from "./componentes/banner/Banner"

import MyCarousel from "./components/carousel/CarouselImg";

import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {

  const userLog = useSelector((state) => state.userLogged.logged);
  useEffect(()=>{},[userLog])

  return (
    <>
      <NavBar userLog={userLog}/>
      <Banner/>
      <About/>
      {/* <MyCarousel/> */}
      <Footer/>
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
