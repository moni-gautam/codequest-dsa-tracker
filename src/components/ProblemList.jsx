function ProblemList({ problems }) {
  return (
    <div>
      <h2>Problems</h2>

      {problems.map((problem) => (
        <div key={problem.id}>
          {problem.title}
        </div>
      ))}
    </div>
  );
}

export default ProblemList;