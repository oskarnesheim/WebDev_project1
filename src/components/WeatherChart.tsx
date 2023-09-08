import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { forecastday } from "../../public/interfaces/IWeatherAPI";

type forcastDayProps = {
  day: forecastday;
};
//   export default function ForecastHours({ hours, preview }: forecastHourProps) {
export default function WeatherChart({ day }: forcastDayProps) {
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
                borderColor: "red",
                data: day.hour.map((hour) => hour.temp_c),
                type: "line",
              },
              //   {
              //     label: "Rain (mm)",
              //     borderColor: "blue",
              //     data: day.hour.map((hour) => hour.precip_mm),
              //     type: "line",
              //   },
              // {
              //   label: "Rain (mm)",
              //   backgroundColor: "blue", // Set the background color to blue
              //   data: day.hour.map((hour) =>
              //     hour.precip_mm > 0 ? hour.precip_mm : null
              //   ), // Set rain to null if it's 0 or less
              // },
              {
                label: "Rain (mm)",
                backgroundColor: "rgba(0, 0, 255, 0.5)", // Set the background color to blue with transparency
                data: day.hour.map((hour) => 10 * hour.precip_mm), // Set rain to null if it's 0 or less
                hidden: true, // Initially hide this dataset
              },
              {
                label: "Visible Rain (mm)", // Label for the visible rain dataset
                backgroundColor: "rgba(0, 0, 255, 0.5)", // Set the background color to blue with transparency
                data: day.hour.map((hour) =>
                  hour.precip_mm > 0 ? hour.precip_mm * 10 : null
                ), // Set rain to null if it's 0 or less
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
    <div>
      <canvas ref={canvasRef} width={800} height={400} />
    </div>
  );
}

// export default WeatherChart;
