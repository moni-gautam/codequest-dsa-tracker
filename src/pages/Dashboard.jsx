import Navbar from "../components/Navbar";
import ProblemForm from "../components/ProblemForm";
import ProblemList from "../components/ProblemList";
import { useState, useEffect } from "react";
import { getProblems } from "../services/problemService";
import StatsCard from "../components/StatsCard";
import DifficultyChart from "../components/DifficultyChart";
import RevisionPlanner from "../components/RevisionPlanner";
import TopicChart from "../components/TopicChart";
import RevisionQueue from "../components/RevisionQueue";
import InterviewScore from "../components/InterviewScore";

function Dashboard({ user }) {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const data = await getProblems(user.uid);
      setProblems(data);
    };

    fetchProblems();
  }, [user]);

  const easyCount = problems.filter((p) => p.difficulty === "Easy").length;

  const mediumCount = problems.filter((p) => p.difficulty === "Medium").length;

  const hardCount = problems.filter((p) => p.difficulty === "Hard").length;

  const today = new Date().toDateString();

  const solvedToday = problems.some(
    (problem) =>
      problem.solvedDate &&
      new Date(problem.solvedDate).toDateString() === today,
  );

  const streak = solvedToday ? 1 : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <Navbar user={user} />

      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <StatsCard title="Total Problems" value={problems.length} />

        <StatsCard title="Easy" value={easyCount} />

        <StatsCard title="Medium" value={mediumCount} />

        <StatsCard title="Hard" value={hardCount} />
        <StatsCard title="🔥 Streak" value={`${streak} Day`} />
      </div>
      <RevisionQueue problems={problems} />

      {/* Analytics Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            width: "450px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Difficulty Analytics
          </h2>

          <DifficultyChart
            easyCount={easyCount}
            mediumCount={mediumCount}
            hardCount={hardCount}
          />
        </div>

        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            width: "450px",
            height: "420px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Topic Analytics
          </h2>

          <TopicChart problems={problems} />
        </div>
      </div>

      <InterviewScore problems={problems} />

      {/* AI Planner */}
      <RevisionPlanner problems={problems} />

      {/* Add Problem Form */}
      <ProblemForm problems={problems} setProblems={setProblems} user={user} />

      {/* Problem List */}
      <ProblemList problems={problems} setProblems={setProblems} />
    </div>
  );
}

export default Dashboard;
