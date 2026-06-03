import { markRevisionComplete } from "../services/problemService";

function RevisionQueue({ problems }) {
  const today = new Date();

  const dueProblems = problems.filter(
    (problem) =>
      problem.nextRevision &&
      new Date(problem.nextRevision) <= today
  );

  const handleRevision = async (problem) => {
    try {
      await markRevisionComplete(
        problem.firestoreId,
        problem.revisionStage
      );

      alert(
        `${problem.title} revised successfully!`
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-4">
        📅 Revision Due Today
      </h2>

      {dueProblems.length === 0 ? (
        <p className="text-gray-400">
          No revisions due today.
        </p>
      ) : (
        <div className="space-y-3">
          {dueProblems.map((problem) => (
            <div
              key={problem.firestoreId}
              className="bg-slate-700 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">
                  {problem.title}
                </h3>

                <p className="text-sm text-gray-400">
                  Topic: {problem.topic}
                </p>

                <p className="text-sm text-gray-400">
                  Revision Stage: {problem.revisionStage}
                </p>
              </div>

              <button
                onClick={() =>
                  handleRevision(problem)
                }
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Mark Revised
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RevisionQueue;