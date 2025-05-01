import {createBrowserRouter} from "react-router";
// import Root from "../Root/Root";
import Homepage from "../Components/Home/Homepage";
import HomeDisplay from "../Components/HomeDisplay/HomeDisplay";

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
    ],
  },
  {},
]);
