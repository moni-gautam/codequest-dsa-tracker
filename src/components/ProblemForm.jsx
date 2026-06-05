
import { useState } from "react";
import {
  addProblem,
  problemExists,
} from "../services/problemService";

import {
  extractProblemDetails,
} from "../services/geminiService";

function ProblemForm({
  problems,
  setProblems,
  user,
}) {
  const [url, setUrl] =
    useState("");

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    if (!url.trim()) {
      alert(
        "Enter problem URL"
      );
      return;
    }

    try {
      const data =
        await extractProblemDetails(
          url
        );

      const tomorrow =
        new Date();

      tomorrow.setDate(
        tomorrow.getDate() + 1
      );

      const newProblem = {
        title:
          data.title ||
          "Unknown Problem",

        difficulty:
          data.difficulty ||
          "Easy",

        topic:
          data.topic ||
          "Unknown",

        platform:
          data.platform ||
          "LeetCode",

        url: url.trim(),

        userId:
          user.uid,

        solvedDate:
          new Date().toISOString(),

        nextRevision:
          tomorrow.toISOString(),

        revisionStage: 1,
      };

      const exists =
        await problemExists(
          newProblem.title,
          user.uid
        );

      if (exists) {
        alert(
          "Problem already exists!"
        );
        return;
      }

      await addProblem(
        newProblem
      );

      setProblems([
        ...problems,
        newProblem,
      ]);

      setUrl("");

      alert(
        "Problem Added 🚀"
      );

    } catch (error) {
      console.log(error);

      alert(
        "Could not extract problem details."
      );
    }
  };

  return (
    <div
      className="
      bg-zinc-900
      border
      border-yellow-500/20
      p-6
      rounded-2xl
      shadow-lg
      mb-8
    "
    >
      <h2
        className="
        text-2xl
        font-bold
        text-yellow-400
        mb-4
      "
      >
        🚀 Add Problem from URL
      </h2>

      <p className="text-gray-400 mb-4">
        Paste a LeetCode URL and
        CodeQuest will
        automatically detect
        the problem details.
      </p>

      <form
        onSubmit={
          handleSubmit
        }
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="https://leetcode.com/problems/two-sum/"
          value={url}
          onChange={(e) =>
            setUrl(
              e.target.value
            )
          }
          className="
            w-full
            p-3
            rounded-lg
            bg-black
            border
            border-yellow-500/20
            text-white
            focus:outline-none
            focus:border-yellow-500
          "
        />

        <button
          type="submit"
          className="
            w-full
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-semibold
            py-3
            rounded-lg
            transition
          "
        >
          🚀 Add Problem
        </button>
      </form>
    </div>
  );
}

export default ProblemForm;