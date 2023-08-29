/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import "./App.css";
import QueryTest from "./QueryTest";

function App() {
  const parentRef = useRef(null);

  return (
    <>
      <h1 className="font-bold">Hello World</h1>
      {/* <button onClick={() => getData()}>Send request</button> */}

      <QueryTest ref={parentRef} />
    </>
  );
}

export default App;
