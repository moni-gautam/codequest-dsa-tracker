import {
  deleteProblem,
  updateProblem,
} from "../services/problemService";

function ProblemList({ problems, setProblems }) {
  const handleDelete = async (id) => {
    try {
      await deleteProblem(id);

      setProblems(
        problems.filter(
          (problem) =>
            problem.firestoreId !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (
    id,
    difficulty
  ) => {
    try {
      await updateProblem(
        id,
        difficulty
      );

      setProblems(
        problems.map((problem) =>
          problem.firestoreId === id
            ? {
                ...problem,
                difficulty,
              }
            : problem
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getDifficultyColor = (
    difficulty
  ) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "Hard":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        📚 Solved Problems
      </h2>

      {problems.length === 0 ? (
        <div className="bg-slate-800 rounded-xl p-6 text-center text-gray-400">
          No problems added yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.firestoreId}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:border-blue-500 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {problem.title}
              </h3>

              {/* Difficulty Badge */}
              <div className="mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getDifficultyColor(
                    problem.difficulty
                  )}`}
                >
                  {problem.difficulty}
                </span>
              </div>

              {/* Info */}
              <div className="space-y-3 text-gray-300">
                <p>
                  📚 <span className="font-semibold">Topic:</span>{" "}
                  {problem.topic}
                </p>

                <p>
                  💻 <span className="font-semibold">Platform:</span>{" "}
                  {problem.platform}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    const newDifficulty =
                      prompt(
                        "Enter new difficulty (Easy/Medium/Hard)",
                        problem.difficulty
                      );

                    if (!newDifficulty) return;

                    handleUpdate(
                      problem.firestoreId,
                      newDifficulty
                    );
                  }}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      problem.firestoreId
                    )
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProblemList;