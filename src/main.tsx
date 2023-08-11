import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { About } from "./components/page/About";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/about",
      element: <About />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
