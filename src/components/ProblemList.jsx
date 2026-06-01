import { deleteProblem, updateProblem } from "../services/problemService";

function ProblemList({ problems }) {
  const handleUpdate = async (id, difficulty) => {
    try {
      await updateProblem(id, difficulty);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Problems</h2>

      {problems.length === 0 ? (
        <p>No problems added yet.</p>
      ) : (
        problems.map((problem) => (
          <div key={problem.firestoreId}>
            <h3>{problem.title}</h3>

            <p>
              <strong>Difficulty:</strong> {problem.difficulty}
            </p>

            <p>
              <strong>Topic:</strong> {problem.topic}
            </p>

            <p>
              <strong>Platform:</strong> {problem.platform}
            </p>

            <button onClick={() => handleDelete(problem.firestoreId)}>
              Delete
            </button>

            <button
              onClick={() => {
                const newDifficulty = prompt(
                  "Enter new difficulty (Easy/Medium/Hard)",
                  problem.difficulty,
                );

                if (!newDifficulty) return;

                handleUpdate(problem.firestoreId, newDifficulty);
              }}
            >
              Edit
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ProblemList;
