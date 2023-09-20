import { Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";

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
