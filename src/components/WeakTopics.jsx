function WeakTopics({ problems }) {
  const topicCounts = {};

  problems.forEach((problem) => {
    const topic = problem.topic || "Unknown";

    topicCounts[topic] =
      (topicCounts[topic] || 0) + 1;
  });

  const sortedTopics = Object.entries(
    topicCounts
  ).sort((a, b) => a[1] - b[1]);

const weakTopics = sortedTopics.slice(
  0,
  Math.floor(sortedTopics.length / 2)
);

const strongTopics = sortedTopics.slice(
  Math.floor(sortedTopics.length / 2)
).reverse();

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-6">
        ⚠ Topic Analysis
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-red-400 mb-3">
            Weak Topics
          </h3>

          {weakTopics.map(([topic, count]) => (
            <div
              key={topic}
              className="bg-slate-700 p-3 rounded-lg mb-2"
            >
              ⚠ {topic} ({count})
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Strong Topics
          </h3>

          {strongTopics.map(([topic, count]) => (
            <div
              key={topic}
              className="bg-slate-700 p-3 rounded-lg mb-2"
            >
              ✅ {topic} ({count})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeakTopics;