function WeakTopics({ problems }) {
  const topicTargets = {
    Array: 50,
    DP: 50,
    Tree: 50,
    Graph: 50,
    Heap: 50,
    Greedy: 50,
    String: 50,
    "Binary Search": 50,
  };

  const topicCounts = {};

  problems.forEach((problem) => {
    const topic = problem.topic || "Unknown";

    topicCounts[topic] =
      (topicCounts[topic] || 0) + 1;
  });

  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-6">
        🎯 Topic Mastery
      </h2>

      <div className="space-y-5">
        {Object.entries(topicTargets).map(
          ([topic, target]) => {
            const count =
              topicCounts[topic] || 0;

            const progress = Math.min(
              (count / target) * 100,
              100
            );

            let status =
              "⚠ Needs Work";
            let color =
              "bg-red-500";

            if (count >= target) {
              status =
                "✅ Mastered";
              color =
                "bg-green-500";
            } else if (
              count >= 10
            ) {
              status =
                "📈 Learning";
              color =
                "bg-yellow-500";
            }

            return (
              <div key={topic}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-white">
                    {topic}
                  </span>

                  <span className="text-gray-300">
                    {count}/{target}{" "}
                    {status}
                  </span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div
                    className={`${color} h-3 rounded-full transition-all duration-500`}
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default WeakTopics;