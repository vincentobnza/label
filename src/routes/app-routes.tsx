import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/layout/layout";
import { MessageLayout } from "@/layout/message-layout";
import { SubscriptionLayout } from "@/layout/subscription-layout";

const Home = lazy(() => import("@/pages/home"));
const Messages = lazy(() => import("@/pages/messages"));
const Subscription = lazy(() => import("@/pages/subscription"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
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

  {
    path: "/billing",
    element: <SubscriptionLayout />,
    children: [
      {
        path: "",
        element: <Subscription />,
      },
    ],
  },
]);

export { router };
