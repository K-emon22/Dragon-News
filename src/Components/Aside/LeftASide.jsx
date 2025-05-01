import React from "react";
import CatagoriesOfNews from "../CatagoriesOfNews/CatagoriesOfNews";

const LeftASide = () => {
  return (
    <div className="p-2">
      <h1 className=" font-bold text-2xl">All Catagories </h1>

      <CatagoriesOfNews></CatagoriesOfNews>
    </div>
  );
};

export default LeftASide;
