import { useState } from "react";

function ProblemForm({ problems, setProblems }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newProblem = {
      id: Date.now(),
      title,
    };

    setProblems([...problems, newProblem]);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Problem Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">
        Add Problem
      </button>
    </form>
  );
}

export default ProblemForm;