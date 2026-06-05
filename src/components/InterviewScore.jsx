function InterviewScore({ problems }) {
  const topicCounts = {};

  problems.forEach((problem) => {
    const topic = problem.topic || "Unknown";

    topicCounts[topic] =
      (topicCounts[topic] || 0) + 1;
  });

  const targets = {
    Array: 20,
    DP: 15,
    Graph: 15,
    Tree: 15,
    "Binary Search": 10,
    Greedy: 10,
    Heap: 10,
    String: 5,
  };

  let score = 0;
  let maxScore = 0;

  Object.entries(targets).forEach(
    ([topic, target]) => {
      const solved =
        topicCounts[topic] || 0;

      score += Math.min(
        solved,
        target
      );

      maxScore += target;
    }
  );

  const readiness = Math.round(
    (score / maxScore) * 100
  );

  return (
    <div className="bg-zinc-900
border border-yellow-500/20 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-4">
        🎯 Interview Readiness
      </h2>

      <div className="text-5xl font-bold text-yellow-400">
        {readiness}%
      </div>

      <p className="text-gray-400 mt-2">
        Based on topic coverage
      </p>
    </div>
  );
}

export default InterviewScore;