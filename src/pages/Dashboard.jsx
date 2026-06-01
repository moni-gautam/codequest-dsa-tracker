
import Navbar from "../components/Navbar";
import ProblemForm from "../components/ProblemForm";
import ProblemList from "../components/ProblemList";
import { useState, useEffect } from "react";
import { getProblems } from "../services/problemService";
import StatsCard from "../components/StatsCard";
import DifficultyChart from "../components/DifficultyChart";

function Dashboard({user}) {
  const [problems, setProblems] = useState([]);

   useEffect(() => {
  const fetchProblems = async () => {
  const data = await getProblems(user.uid);
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

<DifficultyChart
  easyCount={easyCount}
  mediumCount={mediumCount}
  hardCount={hardCount}
/>

      <ProblemForm
        problems={problems}
        setProblems={setProblems}
        user = {user}
      />

      <ProblemList
        problems={problems}
      />
    </div>
  );
}

export default Dashboard;