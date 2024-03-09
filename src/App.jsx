
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./redux/actions/actionCreator";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const handleIncrease = () => {
    dispatch(increase()); 
  };
  
  const handleDecrease = () => {
    dispatch(decrease()); 
  };

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrease}>Increase</button> 
        <button onClick={handleDecrease}>Decrease</button> 
        count is {counter}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
