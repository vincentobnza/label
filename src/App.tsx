import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import { router } from "./routes/app-routes";
import { Suspense } from "react";
import { Loading } from "./components/shared/loading";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";
import { AuthProvider } from "./context/auth-context";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
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
