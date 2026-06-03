import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(import.meta.env.VITE_GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export const generateRevisionPlan = async (problems) => {
  const topicCounts = {};

  problems.forEach((problem) => {
    const topic = problem.topic || "Unknown";

    topicCounts[topic] =
      (topicCounts[topic] || 0) + 1;
  });

  const prompt = `
You are a DSA mentor.

Student solved problems topic-wise:

${JSON.stringify(topicCounts, null, 2)}

Analyze weak areas and generate:

1. Weak topics
2. Strengths
3. A 7-day revision plan

Keep the answer concise and structured.
`;

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});
console.log("Sending request to Gemini...");

const result =
  await model.generateContent(prompt);

console.log("Received response");
    

  return result.response.text();
};