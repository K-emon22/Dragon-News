import {Navigate, useLoaderData, useParams} from "react-router";

import {Link} from "react-router";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {IoIosShareAlt} from "react-icons/io";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import HomeDisplay from "../HomeDisplay/HomeDisplay";
import NoNewsFound from "../NoNewsFound/NoNewsFound";

const BreackingNews = () => {
  const {id} = useParams();
  const allNews = useLoaderData();

  const newsByCAt = allNews.filter(
    (singleNews) => singleNews.category_id.toString() === id
  );

  const parseId = parseInt(id);

  if (parseId === 1) {
    return <NoNewsFound></NoNewsFound>;
  } else if (newsByCAt.length === 0) {
    return <HomeDisplay></HomeDisplay>;
  }

  return (
    <div className=" h-[1100px] overflow-y-scroll p-2">
      <h1 className="font-bold text-center text-2xl"> Dragon News {}</h1>
      {newsByCAt.map((singlenews) => (
        <div key={singlenews.id}>
          <div className="flex flex-row bg-gray-300 p-2 mb-5 ">
            <div className="mr-5 bg-gray-200 rounded-xl ">
              <img
                className="w-2/3   rounded-full"
                src={singlenews.author.img}
                alt=""
              />
            </div>
            <div className="my-auto">
              <h1>{singlenews.author.name}</h1>
              <div className="flex flex-row gap-20">
                <h1> {singlenews.author.published_date}</h1>
                <div className="flex flex-row my-auto gap-5">
                  <span>
                    <MdOutlineFavoriteBorder />
                  </span>
                  <span>
                    <IoIosShareAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-2xl"> {singlenews.title}</h1>
            <div>
              <img className="w-full" src={singlenews.image_url} alt="" />
            </div>
            <div>
              <p className="line-clamp-4"> {singlenews.details}</p>
              <Link to={`/newsdetails/${singlenews.id}`}>
                <button className="text-orange-600 font-bold">Read More</button>
              </Link>
            </div>
            <div>
              <hr />

              <div className="flex flex-row justify-between">
                {" "}
                <h1>
                  Rating{" "}
                  <span className="font-bold">{singlenews.rating.number}</span>{" "}
                </h1>
                <h1 className=" flex flex-row gap-2">
                  <span className="my-auto">
                    <MdOutlineRemoveRedEye />{" "}
                  </span>{" "}
                  <span>{singlenews.total_view}</span>
                </h1>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BreackingNews;
