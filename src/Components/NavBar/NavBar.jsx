import React from "react";
import {Link} from "react-router";

const NavBar = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className=" grid grid-cols-3 mt-10">
      <div></div>
      <div className="my-auto mx-auto">
        <ul className="flex flex-row gap-5 ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>About </li>
          <li>Career </li>
        </ul>
      </div>
      <div className=" flex flex-row gap-5 my-auto ml-auto ">
        <img src="https://i.ibb.co.com/RTwtT104/user.png" alt="" />

        <button className="btn btn-primary"> Login </button>
      </div>
    </div>
  );
};

export default NavBar;
