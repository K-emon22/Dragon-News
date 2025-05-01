import {createBrowserRouter} from "react-router";
// import Root from "../Root/Root";
import Homepage from "../Components/Home/Homepage";
import HomeDisplay from "../Components/HomeDisplay/HomeDisplay";

import DetailsOnly from "../Components/NewsDetasi/DetailsOnly";
import BreackingNews from "../Components/Nwssss/BreackingNews";

export const Route = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/categories.json"),
    element: <Homepage></Homepage>,

    children: [
      {
        path: "/",
        element: <HomeDisplay></HomeDisplay>,
        loader: () => fetch("/news.json"),
      },
      {loader: () => fetch("/news.json"),
        path: "/newsByCat/:id",
        element: <BreackingNews></BreackingNews>,
      },
    ],
  },
  {
    loader: () => fetch("/news.json"),
    path: "/newsdetails/:id",
    element: <DetailsOnly></DetailsOnly>,
  },
]);
