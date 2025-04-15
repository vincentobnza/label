import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/layout/layout";
import { MessageLayout } from "@/layout/message-layout";
import { SubscriptionLayout } from "@/layout/subscription-layout";
import { AuthLayout } from "@/layout/auth-layout";
// import ProtectedRoute from "./private-route";
import { RootLayout } from "@/layout/root-layout";

const Login = lazy(() => import("@/pages/auth/login"));
const Signup = lazy(() => import("@/pages/auth/signup"));
const Home = lazy(() => import("@/pages/home"));
const Messages = lazy(() => import("@/pages/messages"));
const Subscription = lazy(() => import("@/pages/subscription"));

const Explore = lazy(() => import("@/pages/explore"));

const router = createBrowserRouter([
  {
    path: "/feed",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
    ],
  },

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "billing",
        element: <Subscription />,
      },
    ],
  },
  {
    path: "messages",
    element: <MessageLayout />,
    children: [
      {
        path: "",
        element: <Messages />,
      },
    ],
  },

  // AUTHENTICATION PAGES

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export { router };
