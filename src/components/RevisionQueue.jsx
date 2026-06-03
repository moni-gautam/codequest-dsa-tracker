function RevisionQueue({ problems }) {
  const today = new Date();

  const dueProblems = problems.filter(
    (problem) =>
      problem.nextRevision &&
      new Date(problem.nextRevision) <= today
  );

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
              className="bg-slate-700 p-3 rounded-lg"
            >
              {problem.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RevisionQueue;