import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/Nav";
import {Login} from "./components/login/Login"
// import { Products } from "./components/Products";
// import { useSelector } from "react-redux";


function App() {

const userLog = true;
  return (
    <>
      <NavBar logged={userLog} />
      <div className="container">
        <Login/>



        <Routes>
          
          {userLog && (
            <Route
              path="/Carrito"
           
            ></Route>
          )}
          {userLog && (
            <Route
              path="/Pedidos"
              // element={<Pedidos logged={userLog} />}
            ></Route>
          )}
          <Route path="/*" element={<Navigate to="/Tienda"></Navigate>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
