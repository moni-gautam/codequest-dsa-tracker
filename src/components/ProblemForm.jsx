import { useState } from "react";
import { addProblem } from "../services/problemService";

function ProblemForm({ problems, setProblems }) {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

  const newProblem = {
  title,
  difficulty,
  topic,
  platform,
};
  setProblems([...problems, newProblem]);

  await addProblem(newProblem);

    setTitle("");
    setDifficulty("Easy");
    setTopic("");
    setPlatform("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Problem</h2>

      <input
        type="text"
        placeholder="Problem Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <br />
      <br />

      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Platform"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">
        Add Problem
      </button>
    </form>
  );
}

export default ProblemForm;