import React from "react";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
const Login = () => {
  return (
    <div>
      <div className=" p-2 flex flex-col gap-2 ">
        <h1 className="font-bold text-2xl mb-3">Login With </h1>
        <button className="border-2 justify-center border-black rounded-lg text-blue-500 p-2 flex flex-row my-auto">
          <span className="my-auto mr-2">
            <FcGoogle />
          </span>
          <span> Login With Google</span>
        </button>
        <button className="border-2 border-blue-500 p-2 rounded-lg flex flex-row justify-center my-auto">
          <span className="my-auto mr-2">
            <FaGithub />
          </span>
          <span>Login With GitHub</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
