/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  RouterProvider,
  createHashRouter,
  useLocation,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./components/Home.tsx";
import MyCities from "./pages/MyCities.tsx";
import City from "./pages/City.tsx";
const queryClient = new QueryClient();
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "my_cities",
        element: <MyCities />,
      },
      {
        path: ":city",
        element: <City />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
