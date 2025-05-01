import React from "react";
import {useLoaderData} from "react-router";

const CatagoriesOfNews = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div className="grid grid-cols-3 mt-5 ">
      <div></div>

      <div className="col-span-2">
        {categories.map((singeCat) => (
          <div key={singeCat.id} className=" ">
            <h1 className="font-bold ">{singeCat.name}</h1>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatagoriesOfNews;
