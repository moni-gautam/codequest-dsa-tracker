import { GoogleGenerativeAI } from "@google/generative-ai";

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
You are an elite DSA mentor helping students prepare for coding interviews.

Student topic distribution:

${JSON.stringify(topicCounts, null, 2)}

Generate ONLY a "Today's Revision Mission".

Rules:
- Focus primarily on the weakest topic.
- Give exactly 3 actionable tasks.
- Mention estimated study time.
- Mention expected improvement.
- Keep the response under 120 words.
- Do NOT generate a weekly plan.
- Do NOT generate separate strengths and weaknesses sections.
- Use emojis and clean formatting.

Format exactly like:

🎯 Today's Focus: <Topic>

📌 Why:
<One short sentence>

✅ Tasks:
1. ...
2. ...
3. ...

⏱ Estimated Time:
...

📈 Expected Outcome:
...
`;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
  });

  console.log("Sending request to Gemini...");

  let result;

  for (let i = 0; i < 3; i++) {
    try {
      result = await model.generateContent(prompt);
      break;
    } catch (error) {
      if (
        error.message.includes("503") ||
        error.message.includes("overloaded")
      ) {
        console.log("Retrying...");
        await new Promise((resolve) =>
          setTimeout(resolve, 2000)
        );
      } else {
        throw error;
      }
    }
  }

  if (!result) {
    return `
🎯 Today's Focus: Dynamic Programming

📌 Why:
This topic has the least practice and needs reinforcement.

✅ Tasks:
1. Solve Climbing Stairs
2. Solve House Robber
3. Revise DP patterns

⏱ Estimated Time:
45 Minutes

📈 Expected Outcome:
Better DP intuition and improved interview readiness.
`;
  }

  console.log("Received response");

  return result.response.text();
};