import { useRecoilState } from "recoil";
import { measuringUnit } from "../recoil/atoms";

export default function MetricChooser() {
  const [metric, setMetric] = useRecoilState(measuringUnit);

  return (
    <>
      <button onClick={() => setMetric(!metric)}>
        {metric ? "Metric" : "Imperial"}
      </button>
    </>
  );
}
