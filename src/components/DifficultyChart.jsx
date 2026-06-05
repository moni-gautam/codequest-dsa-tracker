import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DifficultyChart({
  easyCount,
  mediumCount,
  hardCount,
}) {
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
  {
    data: [
      easyCount,
      mediumCount,
      hardCount,
    ],

    backgroundColor: [
      "#22c55e",
      "#eab308",
      "#ef4444",
    ],

    borderColor: "#18181b",
    borderWidth: 3,
  },
],
  };

  const options = {
  responsive: true,
  maintainAspectRatio: true,

  plugins: {
    legend: {
      position: "top",

      labels: {
        color: "#f3f4f6",
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
};

  return (
    <div
      style={{
        width: "220px",
        margin: "auto",
      }}
    >
      <Pie data={data} options={options} />
    </div>
  );
}

export default DifficultyChart;