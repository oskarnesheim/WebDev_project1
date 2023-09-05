/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./components/Home.tsx";
import MyCities from "./pages/MyCities.tsx";
import City from "./pages/City.tsx";
import CurrentWeather from "./components/CurrentWeather.tsx";
import Forecast from "./pages/Forecast.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: ":city",
            element: <City />,
            loader: async ({ params }) => {
              return params.city;
            },
            children: [
              {
                path: "current",
                element: <CurrentWeather />,
              },
              {
                path: "forecast",
                element: <Forecast />,
              },
            ],
          },
        ],
      },
      {
        path: "my_cities",
        element: <MyCities />,
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
