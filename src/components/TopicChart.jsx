import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function TopicChart({ problems }) {
  const topicCounts = {};

  problems.forEach((problem) => {
    const topic = problem.topic || "Unknown";

    topicCounts[topic] =
      (topicCounts[topic] || 0) + 1;
  });

  const data = {
    labels: Object.keys(topicCounts),
    datasets: [
      {
        label: "Problems Solved",
        data: Object.values(topicCounts),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: "50%",
        height: "250px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}

export default TopicChart;