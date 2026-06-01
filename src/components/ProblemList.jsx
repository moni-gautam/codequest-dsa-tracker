function ProblemList({ problems }) {
  return (
    <div>
      <h2>Problems</h2>

      {problems.length === 0 ? (
        <p>No problems added yet.</p>
      ) : (
        problems.map((problem) => (
          <div key={problem.id}>
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

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default ProblemList;