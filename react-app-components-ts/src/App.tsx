import React from "react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Post from "./pages/business-components/Post";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Users from "./pages/Users";
import Interview from "./pages/Interview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Interview />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "*",
    element: <div>404 error</div>,
  },
]);

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
