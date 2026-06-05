# 🚀 CodeQuest
https://codequest-dsa-tracker.vercel.app

### AI-Powered DSA Progress Tracker & Smart Revision Assistant

CodeQuest helps students track solved coding problems, identify weak topics, plan revisions using spaced repetition, and stay interview-ready.

Unlike traditional trackers, CodeQuest combines:

* 📊 Progress Analytics
* 🧠 AI Revision Planning
* 🔁 Spaced Repetition Revision System
* 🔗 Browser Extension Integration
* 🎯 Interview Readiness Scoring

---
## 💡 Why I Built CodeQuest

During my DSA and interview preparation journey, I noticed a recurring problem.

I was solving coding problems regularly, but I wasn't revising them effectively. After a few weeks, many concepts, patterns, and solutions started fading from memory. I realized that solving problems alone was not enough—consistent revision was equally important.

Most students focus heavily on solving new problems but often lack a structured revision system. As a result, they forget important concepts and struggle to retain what they have already learned.

To solve this problem, I built **CodeQuest**—an AI-powered DSA progress tracker that not only records solved problems but also schedules revisions using spaced repetition, identifies weak topics, tracks interview readiness, and integrates directly with LeetCode through a Chrome Extension.

My goal was simple:

**Help students remember what they learn, not just track what they solve.**


## 🌟 Features

### 📈 Problem Tracking

Track coding problems from:

* LeetCode
* Coding Platforms
* Manual URL Submission

Store:

* Problem Title
* Difficulty
* Topic
* Platform
* Revision Schedule
* Original Problem Link

---

### 🔗 Chrome Extension

## 🧩 Chrome Extension Installation

### Step 1: Download Repository

```bash
git clone https://github.com/moni-gautam/codequest-dsa-tracker.git
```

### Step 2: Open Chrome Extensions

Navigate to:

```text
chrome://extensions
```

### Step 3: Enable Developer Mode

Turn on **Developer Mode** in the top-right corner.

### Step 4: Load Extension

Click:

```text
Load Unpacked
```

Select:

```text
extension/dist
```

### Step 5: Connect Account

1. Open CodeQuest Dashboard.
2. Copy your UID from the navbar.
3. Open the Chrome Extension.
4. Paste the UID once.
5. Click Save User ID.

### Step 6: Start Tracking

1. Open a solved LeetCode problem.
2. Click the CodeQuest extension.
3. Click **Save To Dashboard**.
4. The problem is automatically added to your account.


---

### 🤖 AI URL Extraction

Paste a LeetCode URL.

CodeQuest automatically extracts:

* Problem Title
* Difficulty
* Topic
* Platform

using Google Gemini AI.

No manual form filling required.

---

### 🔁 Smart Revision Planner

Every solved problem enters a revision cycle:

Day 1
→ Day 7
→ Day 30

Designed using spaced repetition principles.

---

### 📊 Analytics Dashboard

Track:

* Total Problems Solved
* Difficulty Distribution
* Topic Distribution
* Revision Queue
* Interview Readiness

---

### 🎯 Weak Topic Detection

Automatically identifies areas needing improvement.

Examples:

* Dynamic Programming
* Graphs
* Trees
* Greedy

---

### 🏆 Achievements System

Gamified progress tracking:

* First Problem Solved
* 10 Problems Milestone
* 50 Problems Milestone
* Revision Streaks

---

## 🛠 Tech Stack

Frontend

* React.js
* Tailwind CSS
* Chart.js

Backend

* Firebase Firestore
* Firebase Authentication

AI

* Google Gemini API

Browser Extension

* Chrome Extension (Manifest V3)

Deployment

* Vercel

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/moni-gautam/codequest-dsa-tracker
cd codequest
```

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 🔗 Extension Setup

1. Build the extension.
2. Open Chrome Extensions.
3. Enable Developer Mode.
4. Click Load Unpacked.
5. Select the extension folder.
6. Copy your UID from CodeQuest.
7. Paste UID into extension.
8. Start tracking problems.

---

## 🎥 Demo Workflow

Login
↓
Solve LeetCode Problem
↓
Open Extension
↓
Save To Dashboard
↓
Track Progress
↓
Revise Smarter
↓
Improve Interview Readiness

---

## 🚀 Future Improvements

* 🔄 **Automatic LeetCode Sync** — Enter a LeetCode username and import all solved problems automatically.
* 🌐 **Multi-Platform Support** — Integrate LeetCode, Codeforces, AtCoder, HackerRank, and GeeksforGeeks.
* 🔔 **Smart Revision Notifications** — Browser and email reminders for scheduled revisions.
* 🤖 **AI Revision Questions** — Generate personalized revision and interview questions from solved problems.
* 📱 **Mobile App** — Access CodeQuest on Android and iOS.
* 🎤 **AI Mock Interviews** — Practice technical interviews with AI-generated feedback.
* 📈 **Advanced Analytics** — Track learning trends, retention rates, and topic growth over time.


---

## 👨‍💻 Author

Built with ❤️ by Moni Gautam
<img width="940" height="431" alt="image" src="https://github.com/user-attachments/assets/a1cbde6a-baa0-4ef0-99b9-317451a5f1e0" />
<img width="935" height="793" alt="image" src="https://github.com/user-attachments/assets/07dce2cd-eec8-4d58-87ae-f62945544d93" />
<img width="929" height="845" alt="image" src="https://github.com/user-attachments/assets/8e0d9da1-6ac1-4377-87e5-3c32a6c909f3" />
<img width="939" height="608" alt="image" src="https://github.com/user-attachments/assets/7fa5cebf-8c27-4c0f-9b7d-c02b3e9494db" />
<img width="931" height="408" alt="image" src="https://github.com/user-attachments/assets/cc1f1127-7bfb-4eb9-af8d-7dc099e0eba4" />






