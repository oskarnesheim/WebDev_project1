import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error/ErrorPage.tsx";
import City from "./components/city/City.tsx";
import Forecast from "./components/city/forecast/Forecast.tsx";
import Home from "./components/home/Home.tsx";

const queryClient = new QueryClient();
export const router = createBrowserRouter([
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
            children: [
              {
                path: "forecast",
                element: <Forecast />,
              },
            ],
          },
        ],
      },
    ],
  },
],
{basename: "/project1"}
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </RecoilRoot>
  </QueryClientProvider>
);
