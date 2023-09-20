import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { forecastday } from "../../public/interfaces/IWeatherAPI";

type forecastDayProps = {
  day: forecastday;
};
//   export default function ForecastHours({ hours, preview }: forecastHourProps) {
export default function WeatherChart({ day }: forecastDayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  //   const [chartInstance, setChartInstance] = useState<Chart | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: day.hour.map((hour) => hour.time.slice(-5)),
            datasets: [
              {
                label: "Temperature (°C)",
                borderColor: "#f5427e",
                data: day.hour.map((hour) => hour.temp_c),
                type: "line",
              },
              {
                label: "Rain (mm)",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                data: day.hour.map((hour) =>
                  hour.precip_mm > 0 ? hour.precip_mm : null
                ),
              },
              {
                label: "Wind (m/s)",
                borderColor: "green",
                data: day.hour.map((hour) => hour.wind_kph / 3.6),
                type: "line",
              },
            ],
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Hour",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Value",
                },
              },
            },
          },
        });
      }
    }
  }, [day]);

  return (
    <div style={{ zIndex: 10 }}>
      <canvas ref={canvasRef} width={800} height={400} />
    </div>
  );
}

// export default WeatherChart;
