import React from "react";

import Login from "../Authentication/Login/Login";
import FindUs from "../FindUs/FindUs";
const RightAside = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Login></Login>
      </div>
      <div>
        <FindUs></FindUs>
      </div>

      <div className=" p-2 flex flex-col gap-2 ">
        <h1 className="font-bold text-2xl mb-3">Q-Zone</h1>

        <div>
          <img src="https://i.ibb.co.com/ZRVjyhPx/swimming.png" alt="" />
          <img src="https://i.ibb.co.com/N256c6vy/class.png" alt="" />
          <img src="https://i.ibb.co.com/XrJ4Y9s0/playground.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightAside;
