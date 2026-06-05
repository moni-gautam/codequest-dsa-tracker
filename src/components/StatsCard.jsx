function StatsCard({ title, value }) {

  const getBorderColor = () => {

    if (title.includes("Easy"))
      return "border-emerald-500";

    if (title.includes("Medium"))
      return "border-amber-500";

    if (title.includes("Hard"))
      return "border-rose-500";

    if (title.includes("Streak"))
      return "border-orange-500";

    return "border-violet-500";
  };

  const getIcon = () => {

    if (title.includes("Easy"))
      return "🟢";

    if (title.includes("Medium"))
      return "🟡";

    if (title.includes("Hard"))
      return "🔴";

    if (title.includes("Streak"))
      return "🔥";

    return "📚";
  };

  return (
    <div
      className={`
        bg-white/5
backdrop-blur-lg
border border-white/10
        rounded-2xl
        shadow-lg
        p-6
        py-4
        text-center
        border-l-4
        ${getBorderColor()}
        hover:scale-105
        hover:shadow-xl
        transition-all
        duration-300
      `}
    >
      <h3 className="text-gray-400 text-lg flex items-center justify-center gap-2">
        <span>{getIcon()}</span>
        {title}
      </h3>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;