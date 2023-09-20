import { useRecoilState } from "recoil";
import { measuringUnit } from "../../recoil/atoms";
import "./Navbar.css";

export default function MetricChooser() {
  const [metric, setMetric] = useRecoilState(measuringUnit);

  function toggleMeasuringUnit() {
    setMetric(!metric);
    if (metric) {
      sessionStorage.setItem("metric", JSON.stringify(false));
    } else {
      sessionStorage.setItem("metric", JSON.stringify(true));
    }
  }

  return (
    <button className="metimp-btn" onClick={() => toggleMeasuringUnit()}>
      {metric ? "Metric" : "Imperial"}
    </button>
  );
}
