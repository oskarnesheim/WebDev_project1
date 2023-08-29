/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type QueryTestProps = {
  ref: React.MutableRefObject<null>;
};

function QueryTest({ ref }: QueryTestProps) {
  const APITEST = "https://api.chucknorris.io/jokes/random";
  const [jokes, setJokes] = useState<string[]>([]);

  // function getData() {
  //   axios
  //     .get(APITEST)
  //     .then((res) => res.data.value)
  //     .then((data) => setJokes([...jokes, data]))
  //     .catch((err) => console.log(err));
  // }

  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["joke"],
  //   queryFn: getData,
  // });

  const { isLoading, isError, data } = useQuery({
    queryKey: ["joke"],
    queryFn: () =>
      axios.get(APITEST).then((res) => setJokes([...jokes, res.data.value])),
  });
  if (isLoading) {
    return <div>Loading</div>;
  }

  function renderJokes() {
    return jokes.map((joke) => <div key={joke}>{joke}</div>);
  }

  return (
    <div>
      <div>
        <div>{renderJokes()}</div>
      </div>
    </div>
  );
}

export default QueryTest;
