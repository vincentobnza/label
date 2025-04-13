import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/layout/Layout";
import { Home } from "@/pages/home";
import { MessageLayout } from "@/layout/MessageLayout";
import { Messages } from "@/pages/messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/messages",
    element: <MessageLayout />,
    children: [
      {
        path: "",
        element: <Messages />,
      },
    ],
  },
]);

export { router };
