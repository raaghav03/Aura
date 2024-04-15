import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export default function KPI({
  heading,
  subheading = "last 12 months",
  metric,
  chart,
  icon,
  change,
}) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-center gap-x-2 text-neutral-400">
          {icon}
          <p className="flex-1">{heading}</p>
          {subheading}
        </div>
        <h1 className="font-medium text-4xl text-gray-800">{metric}</h1>
        <Line data={data}/>
      </div>
    </>
  );
}
