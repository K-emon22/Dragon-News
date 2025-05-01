import {StrictMode, Suspense} from "react";
import {createRoot} from "react-dom/client";
import "./App.css";
import "./index.css";

import {Route} from "./Routes/Route";
import {RouterProvider} from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </StrictMode>
);
