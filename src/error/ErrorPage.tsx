import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  return (
    <div className="">
      <div className="">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          Click{" "}
          <a className="" onClick={() => navigate("/")}>
            here
          </a>{" "}
          to go back to the main page
        </p>
      </div>
    </div>
  );
}
