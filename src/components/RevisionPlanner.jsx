import { useState } from "react";
import { generateRevisionPlan } from "../services/geminiService";

function RevisionPlanner({ problems }) {
  const [plan, setPlan] = useState("");
  const [loading, setLoading] =
    useState(false);

const handleGenerate = async () => {
  console.log("Button clicked");

  setLoading(true);

  try {
    const response = await generateRevisionPlan(problems);

    console.log("Gemini Response:", response);

    setPlan(response);
  } catch (error) {
  setPlan(`
Gemini is currently busy.

Suggested Revision Plan:

Day 1 - Arrays
Day 2 - DP
Day 3 - Trees
Day 4 - Graphs
Day 5 - Revision
Day 6 - Mock Interview
Day 7 - Contest
`);
}

  setLoading(false);
};
  return (
    <div className="bg-slate-800 p-6 rounded-xl mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        AI Revision Planner
      </h2>

      <button
        onClick={handleGenerate}
        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg"
      >
        {loading
          ? "Generating..."
          : "Generate Revision Plan"}
      </button>

      {plan && (
        <div className="mt-6 bg-slate-900 p-4 rounded-lg text-left whitespace-pre-wrap text-gray-300">
          {plan}
        </div>
      )}
    </div>
  );
}

export default RevisionPlanner;