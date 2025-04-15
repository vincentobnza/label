import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { router } from "./routes/app-routes";
import { Suspense } from "react";
import { Loading } from "./components/page-loading/loading";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { AuthProvider } from "./context/auth-context";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProvider>
      </Suspense>
    </ThemeProvider>
  );
}
