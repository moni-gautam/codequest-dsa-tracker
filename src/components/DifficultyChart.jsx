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
    labels: [
      "Easy",
      "Medium",
      "Hard",
    ],
datasets: [
  {
    label: "Problems",
    data: [
      easyCount,
      mediumCount,
      hardCount,
    ],
    backgroundColor: [
      "#22c55e",
      "#f59e0b",
      "#ef4444",
    ],
    borderWidth: 1,
  },
],
  };

  return (
    <div style={{ width: "400px" }}>
      <Pie data={data} />
    </div>
  );
}

export default DifficultyChart;