import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/layout/layout";
import { MessageLayout } from "@/layout/message-layout";
import { SubscriptionLayout } from "@/layout/subscription-layout";
import { AuthLayout } from "@/layout/auth-layout";
import ProtectedRoute from "./private-route";

const Login = lazy(() => import("@/pages/auth/login"));
const Signup = lazy(() => import("@/pages/auth/signup"));
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
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
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
