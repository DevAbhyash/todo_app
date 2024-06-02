import "./index.css";
import HomePage from "./Container/Home";
import { useState } from "react";
import ToDolists from "./Container/ToDolists";
function App() {
  const [inputValues, setInputValues] = useState([]);

  function inputArray(values) {
    setInputValues(function (prev) {
      return [...prev, values];
    });
  }
  function updateArray(keys) {
    setInputValues((prev) => prev.filter((e, i) => i !== keys));
  }
  return (
    <div className="bg-red-500 h-screen">
      <h1 className="text-2xl font-extrabold relative left-1/3 ">TO-DOS</h1>

      <HomePage myFunction={inputArray} />
      <ToDolists values={inputValues} keys={updateArray} />
    </div>
  );
}

export default App;
