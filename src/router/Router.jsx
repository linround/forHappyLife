import {createBrowserRouter} from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {Gallery} from "../view/gallery/Gallery.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Gallery />,
      }
    ]
  }
]);
