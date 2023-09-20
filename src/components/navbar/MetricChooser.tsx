import { useRecoilState } from "recoil";
import { measuringUnit } from "../../recoil/atoms";

export default function MetricChooser() {
  const [metric, setMetric] = useRecoilState(measuringUnit);

  function toggleMeasuringUnit() {
    setMetric(!metric);
    if (metric) {
      localStorage.setItem("metric", JSON.stringify(false));
    } else {
      localStorage.setItem("metric", JSON.stringify(true));
    }
  }

  return (
    <button onClick={() => toggleMeasuringUnit()}>
      {metric ? "Metric" : "Imperial"}
    </button>
  );
}
