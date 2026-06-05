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
import WeakTopics from "../components/WeakTopics";
import Achievements from "../components/Achievements";

function Dashboard({ user }) {
  const [problems, setProblems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  console.log(user.uid);

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

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDifficulty =
      difficultyFilter === "All" || problem.difficulty === difficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900 text-white p-6">
      <Navbar user={user} />
    <div className="mb-10">
  <h1 className="text-5xl font-extrabold text-white">
    Welcome back 👋
  </h1>

  <p className="text-gray-400 mt-2 text-lg">
    Keep your interview preparation on track.
  </p>
</div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <StatsCard title="Total Problems" value={problems.length} />

        <StatsCard title="Easy" value={easyCount} />

        <StatsCard title="Medium" value={mediumCount} />

        <StatsCard title="Hard" value={hardCount} />
        <StatsCard title="🔥 Streak" value={`${streak} Day`} />
      </div>
     <RevisionQueue
  problems={problems}
  setProblems={setProblems}
/>
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
      <Achievements problems={problems} />
      <WeakTopics problems={problems} />
      {/* AI Planner */}
      <RevisionPlanner problems={problems} />
      {/* Add Problem Form */}
      <ProblemForm problems={problems} setProblems={setProblems} user={user} />
      {/* Problem List */}
      <div className="bg-slate-800 p-5 rounded-xl mb-6">
        <h2 className="text-2xl font-bold mb-4">🔍 Search & Filter</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-slate-700 text-white p-3 rounded-lg outline-none"
          />

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="bg-slate-700 text-white p-3 rounded-lg"
          >
            <option value="All">All Difficulties</option>

            <option value="Easy">Easy</option>

            <option value="Medium">Medium</option>

            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>
      <ProblemList problems={filteredProblems} setProblems={setProblems} />
    </div>
  );
}

export default Dashboard;
