import React from "react";
import Header from "../Header/Header";
import RightAside from "../Aside/RightAside";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {IoIosShareAlt} from "react-icons/io";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {Link, useLoaderData, useParams} from "react-router";

const DetailsOnly = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const news = useLoaderData();

  const {id} = useParams();
  const singlenews = news.find((singlenws) => singlenws.id === id);

  return (
    <div className="mx-[5%]">
      <Header></Header>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 p-2">
          <div className="flex flex-row bg-gray-300 p-2 mt-2 ">
            <div className="mr-5 bg-gray-200 rounded-xl ">
              <img
                className="w-2/3 m-auto  rounded-full"
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
              <p className=""> {singlenews.details}</p>
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
              <Link to={"/"}>
                <button className="btn btn-primary mt-5"> All News </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <RightAside></RightAside>
        </div>
      </div>
    </div>
  );
};

export default DetailsOnly;
