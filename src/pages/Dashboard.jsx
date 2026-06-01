
import Navbar from "../components/Navbar";
import ProblemForm from "../components/ProblemForm";
import ProblemList from "../components/ProblemList";
import { useState, useEffect } from "react";
import { getProblems } from "../services/problemService";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const [problems, setProblems] = useState([]);

   useEffect(() => {
  const fetchProblems = async () => {
    const data = await getProblems();
    setProblems(data);
  };

  fetchProblems();
}, []);

const easyCount = problems.filter(
  (p) => p.difficulty === "Easy"
).length;

const mediumCount = problems.filter(
  (p) => p.difficulty === "Medium"
).length;

const hardCount = problems.filter(
  (p) => p.difficulty === "Hard"
).length;


  return (
    <div>
      <Navbar />

      <h1>🚀 CodeQuest Dashboard</h1>

      <StatsCard
  title="Total Problems"
  value={problems.length}
/>

<StatsCard
  title="Easy"
  value={easyCount}
/>

<StatsCard
  title="Medium"
  value={mediumCount}
/>

<StatsCard
  title="Hard"
  value={hardCount}
/>

      <ProblemForm
        problems={problems}
        setProblems={setProblems}
      />

      <ProblemList
        problems={problems}
      />
    </div>
  );
}

export default Dashboard;