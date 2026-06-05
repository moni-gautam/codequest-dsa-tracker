function Achievements({ problems }) {
  const achievements = [];

  if (problems.length >= 1)
    achievements.push(
      "🏅 First Problem Solved"
    );

  if (problems.length >= 10)
    achievements.push(
      "🔥 10 Problems Solved"
    );

  if (problems.length >= 50)
    achievements.push(
      "💯 50 Problems Solved"
    );

  if (
    problems.filter(
      (p) => p.topic === "DP"
    ).length >= 10
  ) {
    achievements.push(
      "🧠 DP Explorer"
    );
  }

  return (
    <div className="bg-zinc-900
border border-yellow-500/20 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-4">
        🏆 Achievements
      </h2>

      {achievements.length === 0 ? (
        <p>No achievements yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-3">
          {achievements.map(
            (
              achievement,
              index
            ) => (
              <div
                key={index}
                className="bg-black
border border-yellow-500/20 p-4 rounded-lg"
              >
                {achievement}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Achievements;