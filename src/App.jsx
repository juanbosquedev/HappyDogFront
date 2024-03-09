import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/Nav";
import {Login} from "./components/login/Login"
// import { Products } from "./components/Products";
// import { useSelector } from "react-redux";


function App() {
  // const userLog = useSelector((state) => state.userLogged.logged);
const userLog = true;
  return (
    <>
      <NavBar logged={userLog} />
      <div className="container">
        <Login/>
        <Routes>
          {/* <Route path="/Tienda" element={<Products logged={userLog} />}></Route> */}
          {userLog && (
            <Route
              path="/Carrito"
              // element={<Carrito logged={userLog} />}
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