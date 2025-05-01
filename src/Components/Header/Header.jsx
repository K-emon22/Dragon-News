import {format} from "date-fns";
import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center space-y-3">
      <img
        className=" flex mx-auto"
        src="https://i.ibb.co.com/7NB0GHzh/logo.png"
        alt=""
      />

      <p>Journalism Without Fear or Favour</p>

      <p className="font-bold"> {format(new Date(), "EEEE, MMMM dd, y")}</p>

      <div className="flex flex-row p-4 bg-gray-400 rounded-lg gap-2">
        <button className=" p-auto px-2 font-bold text-white bg-red-700 border border-black">
          Latest
        </button>
        <Marquee className="my-auto font-bold " speed={100} pauseOnHover={true}>
          <p className="">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as.....{" "}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
