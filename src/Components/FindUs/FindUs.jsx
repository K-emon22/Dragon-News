import React from "react";
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
const FindUs = () => {
  return (
    <div>
      <div className="border p-2 flex flex-col gap-2 ">
        <h1 className="font-bold text-2xl mb-3">Find Us On </h1>

        <div>
          <button className="  border w-3/5 p-2 rounded-lg flex flex-row  ">
            <span className="my-auto mr-2 p-2 bg-gray-300 rounded-full">
              <FaFacebookF />
            </span>
            <span className="my-auto">Facebook</span>
          </button>
        </div>
        <div>
          <button className="  border w-3/5 p-2 rounded-lg flex flex-row  ">
            <span className="my-auto mr-2 p-2 bg-gray-300 rounded-full">
              <FaXTwitter />
            </span>
            <span className="my-auto">Twitter</span>
          </button>
        </div>

        <div>
          <button className=" border w-3/5  p-2 rounded-lg flex flex-row  ">
            <span className="my-auto mr-2 p-2 bg-gray-300 rounded-full">
              <FaInstagram />
            </span>
            <span className="my-auto">Instragram </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
