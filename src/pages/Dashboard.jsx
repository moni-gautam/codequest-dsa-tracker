import { useState } from "react";
import Navbar from "../components/Navbar";
import ProblemForm from "../components/ProblemForm";
import ProblemList from "../components/ProblemList";

function Dashboard() {
  const [problems, setProblems] = useState([]);

  return (
    <div>
      <Navbar />

      <h1>🚀 CodeQuest Dashboard</h1>

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