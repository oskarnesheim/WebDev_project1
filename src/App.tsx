/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="contents_body">
        <Outlet />
      </div>
    </>
  );
}

export default App;
