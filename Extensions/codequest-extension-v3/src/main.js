import { db } from "./firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
let currentProblem = null;

console.log("Firebase Loaded");

document.querySelector("#app").innerHTML = `
<div
  style="
    width:350px;
    min-height:400px;
    padding:20px;
    font-family:sans-serif;
  "
>
  <h1>🚀 CodeQuest</h1>

<div id="uidSection">

  <input
    id="userIdInput"
    placeholder="Paste CodeQuest User ID"
    style="
      width:100%;
      padding:10px;
      margin-bottom:10px;
      border-radius:8px;
      border:1px solid #ccc;
    "
  />

  <button id="saveUserBtn">
    Save User ID
  </button>

</div>

  <br><br>


 <button
  id="saveBtn"
  style="
    width:100%;
    padding:10px;
    background:#2563eb;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
  "
>
  🚀 Save To Dashboard
</button>

  <br><br>

 <button
  id="dashboardBtn"
  style="
    width:100%;
    padding:10px;
    margin-top:10px;
    background:#16a34a;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
  "
>
  📊 Open Dashboard
</button>
  <br><br>

<button id="changeUidBtn">
  Change Account
</button>

  <div id="result">
    🟡 Detecting...
  </div>
</div>
`;

document.getElementById("saveUserBtn").addEventListener("click", () => {
  const userId = document.getElementById("userIdInput").value.trim();

  if (!userId) {
    alert("Enter User ID first");
    return;
  }

  chrome.storage.local.set({ userId }, () => {
    document.getElementById("uidSection").style.display = "none";

    alert("User ID Saved ✅");
  });
});

async function detectProblem() {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  chrome.scripting.executeScript(
    {
      target: {
        tabId: tab.id,
      },

      func: () => {
        const title = document.title;

        const url = window.location.href;

        const pageText = document.body.innerText;

        let difficulty = "Unknown";

        if (pageText.includes("Easy")) difficulty = "Easy";
        else if (pageText.includes("Medium")) difficulty = "Medium";
        else if (pageText.includes("Hard")) difficulty = "Hard";

        const knownTopics = [
          "Array",
          "String",
          "Hash Table",
          "Linked List",
          "Stack",
          "Queue",
          "Tree",
          "Binary Tree",
          "BST",
          "Graph",
          "DFS",
          "BFS",
          "Heap",
          "Greedy",
          "Dynamic Programming",
          "DP",
          "Backtracking",
          "Math",
          "Binary Search",
          "Sliding Window",
          "Trie",
          "Bit Manipulation",
          "Recursion",
          "Enumeration",
        ];

        let topic = "Unknown";

        for (const t of knownTopics) {
          if (pageText.includes(t)) {
            topic = t;
            break;
          }
        }

        return {
          title,
          difficulty,
          url,
          topic,
        };
      },
    },

    (results) => {
      if (!results || !results[0]) {
        document.getElementById("result").innerText =
          "Open a LeetCode problem first.";

        return;
      }

      const data = results[0].result;

      currentProblem = data;

      document.getElementById("result").innerHTML = `
          <strong>Title:</strong>
          ${data.title}
          <br><br>

          <strong>Difficulty:</strong>
          ${data.difficulty}
          <br><br>

          <strong>Topic:</strong>
          ${data.topic}
        `;
    },
  );
}

document.getElementById("saveBtn").addEventListener("click", async () => {
  if (!currentProblem) {
    document.getElementById("result").innerText = "Detect a problem first.";

    return;
  }

  try {
    const stored = await chrome.storage.local.get("userId");

    const userId = stored.userId;

    if (!userId) {
      document.getElementById("result").innerText = "Save your User ID first.";

      return;
    }

    const tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    const q = query(collection(db, "problems"), where("userId", "==", userId));

    const snapshot = await getDocs(q);

    const normalizedTitle = currentProblem.title.trim().toLowerCase();

    const exists = snapshot.docs.some(
      (doc) => doc.data().title?.trim().toLowerCase() === normalizedTitle,
    );

    if (exists) {
      document.getElementById("result").innerText =
        "⚠️ Problem already tracked";

      return;
    }

    await addDoc(collection(db, "problems"), {
      title: currentProblem.title,

      difficulty: currentProblem.difficulty,

      topic: currentProblem.topic,

      platform: "LeetCode",

      userId: userId,

      solvedDate: new Date().toISOString(),

      nextRevision: tomorrow.toISOString(),

      revisionStage: 1,

      url: currentProblem.url,
    });

    document.getElementById("result").innerText = "Saved to Dashboard 🚀";
  } catch (error) {
    console.error("Firestore Error:", error);

    document.getElementById("result").innerText = error.message;
  }
});

document.getElementById("dashboardBtn").addEventListener("click", () => {
  chrome.tabs.create({
    url: "https://codequest-dsa-tracker.vercel.app",
  });
});
detectProblem();

(async () => {
  const stored = await chrome.storage.local.get("userId");

  if (stored.userId) {
    document.getElementById("uidSection").style.display = "none";
  }
})();

document.getElementById("changeUidBtn").addEventListener("click", async () => {
  await chrome.storage.local.remove("userId");

  location.reload();
});
