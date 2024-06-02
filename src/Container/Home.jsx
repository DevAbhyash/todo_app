import React from "react";
import { useState } from "react";

const HomePage = (props) => {
  const [inputValue, setInputValue] = useState([]);
  ////////////////creating the function handleInputChange to find out changes of value of input element///

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  //////handleButtonCLick is the function ///////////
  function handleButtonClick() {
    if (!inputValue.length) {
      return;
    }
    props.myFunction(inputValue);
    setInputValue("");
  }
  return (
    <div>
      <input
        onChange={handleInputChange}
        className=" h-12 w-2/3"
        type="text"
        placeholder="Please Enter Your TODO"
        value={inputValue}
      />
      <button
        onClick={handleButtonClick}
        className=" h-16 w-24 bg-black rounded-lg text-white ml-3"
      >
        ADD
      </button>
    </div>
  );
};

export default HomePage;
