import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/Theme-provider";
import { router } from "./routes/AppRoutes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
