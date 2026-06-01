import { useState } from "react";

function ProblemForm() {
  const [problem, setProblem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(problem);

    setProblem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Problem Name"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      <button type="submit">
        Add Problem
      </button>
    </form>
  );
}

export default ProblemForm;