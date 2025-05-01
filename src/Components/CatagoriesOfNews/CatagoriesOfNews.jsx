import {NavLink, useLoaderData} from "react-router";

const CatagoriesOfNews = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div className="mt-5 ">
      <div className=" flex flex-col ">
        {categories.map((singeCat) => (
          <div key={singeCat.id} className="">
            <NavLink
              className={({isActive}) =>
                `p-2 block rounded-lg ${
                  isActive ? "bg-red-600 text-white font-bold text-center" : ""
                } w-full`
              }
              to={`/newsByCat/${singeCat.id}`}
            >
              {singeCat.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatagoriesOfNews;
