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
   <div className="min-h-screen bg-black text-white p-6">
      <Navbar user={user} />
<div className="mb-10">
  <h1 className="text-5xl font-extrabold text-white">
    Welcome back, {user?.displayName?.split(" ")[0]} 👋
  </h1>

  <p className="text-gray-400 text-lg mt-2">
    Track progress, revise smarter, and crack interviews.
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
           backgroundColor: "#18181b",
border: "1px solid rgba(234,179,8,0.2)",
            padding: "20px",
            borderRadius: "12px",
            width: "450px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h2
  style={{
    color: "#eab308",
    fontWeight: "bold",
  }}
>
  📊 Difficulty Analytics
</h2>

          <DifficultyChart
            easyCount={easyCount}
            mediumCount={mediumCount}
            hardCount={hardCount}
          />
        </div>

        <div
          style={{
            backgroundColor: "#18181b",
border: "1px solid rgba(234,179,8,0.2)",
            padding: "20px",
            borderRadius: "12px",
            width: "450px",
            height: "300px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
         <h2
  style={{
    color: "#eab308",
    fontWeight: "bold",
  }}
>
  📈 Topic Analytics
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
      <div className="
bg-zinc-900
border
border-yellow-500/20
p-5
rounded-2xl
mb-6
">
       <h2 className="text-2xl font-bold text-yellow-400 mb-4">🔍 Search & Filter</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
flex-1
bg-black
border
border-yellow-500/20
text-white
p-3
rounded-lg
outline-none
focus:border-yellow-500
"
          />

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="
bg-black
border
border-yellow-500/20
text-white
p-3
rounded-lg
focus:border-yellow-500
"
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
