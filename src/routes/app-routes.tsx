import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/layout/layout";
import { MessageLayout } from "@/layout/message-layout";
import { AuthLayout } from "@/layout/auth-layout";
import { RootLayout } from "@/layout/root-layout";
import ProtectedRoute from "./private-route";

const Login = lazy(() => import("@/pages/auth/login"));
const Signup = lazy(() => import("@/pages/auth/signup"));
const Home = lazy(() => import("@/pages/home"));
const Messages = lazy(() => import("@/pages/messages"));
const Subscription = lazy(() => import("@/pages/subscription"));
const Explore = lazy(() => import("@/pages/explore"));
const CommentsPage = lazy(() => import("@/pages/comments"));
const Notifications = lazy(() => import("@/pages/notifications"));

const router = createBrowserRouter([
  {
    path: "/feed",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },

  {
    path: "/comment",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":id",
        element: <CommentsPage />,
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
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "billing",
        element: (
          <ProtectedRoute>
            <Subscription />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "messages",
    element: (
      <ProtectedRoute>
        <MessageLayout />
      </ProtectedRoute>
    ),
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
