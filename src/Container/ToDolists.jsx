import React from "react";

const ToDolists = (props) => {
  return (
    <div className="  ">
      {!props.values.length && (
        <p className=" font-extrabold text-white text-4xl font-mono">
          Great!You dont have any incomplete activities to do
        </p>
      )}
      {props.values.map((value, index) => {
        return (
          <div key={index} className="p-2 m-2 bg-white rounded shadow">
            <p className=" text-xl font-bold"> {value} </p>
            <button
              onClick={() => props.keys(index)}
              className="bg-red-500 relative left-3/4 bottom-3 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              {" "}
              Completed✖️
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDolists;
