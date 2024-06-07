import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Layout from "../components/layouts/Layout";
import AboutUs from "../pages/aboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          //   abut
          {
            path: "/about-us",
            element: <AboutUs />,
          },
        ],
      },
    ],
  },
]);
