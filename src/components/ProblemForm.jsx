import { useState } from "react";
import { addProblem } from "../services/problemService";

function ProblemForm({ problems, setProblems, user }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const newProblem = {
      title,
      difficulty,
      topic,
      platform,
      userId: user.uid,
      solvedDate: new Date().toISOString(),
      nextRevision: tomorrow.toISOString(),
    };

    setProblems([...problems, newProblem]);

    await addProblem(newProblem);

    setTitle("");
    setDifficulty("Easy");
    setTopic("");
    setPlatform("");
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Add New Problem</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Problem Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
        />

        <input
          type="text"
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Add Problem
        </button>
      </form>
    </div>
  );
}

export default ProblemForm;
