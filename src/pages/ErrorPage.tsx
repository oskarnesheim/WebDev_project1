/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center  h-full m-0">
      <div className="">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          Click{" "}
          <a
            className="underline hover:text-gray-500"
            onClick={() => navigate("/")}
          >
            here
          </a>{" "}
          to go back to the main page
        </p>
      </div>
    </div>
  );
}
