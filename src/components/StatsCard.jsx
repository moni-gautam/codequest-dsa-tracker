function StatsCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg p-6 text-center border border-slate-700">
      <h3 className="text-gray-400 text-lg">
        {title}
      </h3>

      <h2 className="text-4xl font-bold text-white mt-2">
        {value}
      </h2>
    </div>
  );
}

export default StatsCard;