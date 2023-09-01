/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="ml-60">
        <Outlet />
      </div>
    </>
  );
}

export default App;
