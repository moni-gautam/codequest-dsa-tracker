import { markRevisionComplete } from "../services/problemService";

function RevisionQueue({ problems, setProblems }) {
  const today = new Date();

  const dueProblems = problems.filter(
    (problem) =>
      problem.nextRevision && new Date(problem.nextRevision) <= today,
  );

  const handleRevision = async (problem) => {
    try {
      await markRevisionComplete(problem.firestoreId, problem.revisionStage);

      alert(`${problem.title} revised successfully!`);

      setProblems(
        problems.map((p) =>
          p.firestoreId === problem.firestoreId
            ? {
                ...p,
                revisionStage: p.revisionStage + 1,
                nextRevision:
                  p.revisionStage === 1
                    ? new Date(
                        Date.now() + 7 * 24 * 60 * 60 * 1000,
                      ).toISOString()
                    : new Date(
                        Date.now() + 30 * 24 * 60 * 60 * 1000,
                      ).toISOString(),
              }
            : p,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
  bg-zinc-900
border border-yellow-500/20
  border border-violet-500/20
  p-6
  rounded-2xl
  mb-8
  shadow-xl
"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        📅 Revision Due Today
      </h2>

      {dueProblems.length === 0 ? (
        // <p className="text-gray-400">No revisions due today.</p>

        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏆</div>

          <h3 className="text-2xl font-bold text-yellow-400">
            All Revisions Complete
          </h3>

          <p className="text-gray-400 mt-2">
            Great work! Nothing to revise today.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {dueProblems.map((problem) => (
            <div
              key={problem.firestoreId}
              className="bg-slate-700 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{problem.title}</h3>

                <p className="text-sm text-gray-400">Topic: {problem.topic}</p>

                <p className="text-sm text-gray-400">
                  Revision Stage: {problem.revisionStage}
                </p>
              </div>

              <div className="flex gap-2">
                {problem.url && (
                  <a
                    href={problem.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-4
      py-2
      rounded-lg
      font-semibold
      "
                  >
                    🔗 Revise Now
                  </a>
                )}

                <a
                  href={problem.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleRevision(problem)}
                >
                  🚀 Revise Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RevisionQueue;
