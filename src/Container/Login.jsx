import React from "react";

const Login = () => {
  return (
    <div className=" absolute w-1/2  bg-black my-36 mx-auto right-0 left-0 justify-center flex flex-col">
      <h1 className="text-white relative mx-auto right-0 left-0 text-3xl font-bold my-6 ">
        WELCOME TO TODO
      </h1>
      <input
        className="m-6 p-2  w-2/2 h-16"
        type="text"
        placeholder="Enter your Email Id"
      />

      <input
        className="m-6 p-2  w-2/2 h-16"
        type="password"
        placeholder="Enter Your Password"
      />
      <button className="bg-white h-24 m-5 font-bold text-3xl">Login</button>
    </div>
  );
};

export default Login;
