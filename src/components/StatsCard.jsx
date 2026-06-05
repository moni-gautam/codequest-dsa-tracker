
function StatsCard({ title, value }) {
  const getIcon = () => {
    if (title.includes("Easy")) return "🟡";
    if (title.includes("Medium")) return "🟡";
    if (title.includes("Hard")) return "🟡";
    if (title.includes("Streak")) return "🔥";
    return "📚";
  };

  return (
    <div
      className="
      bg-zinc-900
      rounded-2xl
      shadow-lg
      p-6
      text-center
      border
      border-yellow-500/20
      hover:border-yellow-500/50
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <h3 className="text-gray-300 text-lg flex items-center justify-center gap-2">
        <span>{getIcon()}</span>
        {title}
      </h3>

      <h2 className="text-5xl font-bold text-yellow-400 mt-4">
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;