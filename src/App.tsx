/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
