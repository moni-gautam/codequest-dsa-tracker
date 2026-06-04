import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const addProblem = async (problem) => {
  await addDoc(
    collection(db, "problems"),
    problem
  );
};

export const getProblems = async (userId) => {
  const q = query(
    collection(db, "problems"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    ...doc.data(),
    firestoreId: doc.id,
  }));
};

export const deleteProblem = async (id) => {
  await deleteDoc(
    doc(db, "problems", id)
  );
};

export const updateProblem = async (
  id,
  difficulty
) => {
  await updateDoc(
    doc(db, "problems", id),
    {
      difficulty,
    }
  );
};

export const problemExists = async (
  title,
  userId
) => {

  const normalizedTitle =
    title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");

  const q = query(
    collection(db, "problems"),
    where("userId", "==", userId)
  );

  const snapshot =
    await getDocs(q);

  return snapshot.docs.some(doc => {

    const existingTitle =
      doc.data().title
        ?.trim()
        ?.toLowerCase()
        ?.replace(/\s+/g, " ");

    return (
      existingTitle ===
      normalizedTitle
    );
  });
};


export const markRevisionComplete = async (
  id,
  revisionStage
) => {
  let nextRevision = null;
  let nextStage = revisionStage + 1;

  const date = new Date();

  if (revisionStage === 1) {
    date.setDate(date.getDate() + 7);

    nextRevision =
      date.toISOString();
  } else if (
    revisionStage === 2
  ) {
    date.setDate(date.getDate() + 30);

    nextRevision =
      date.toISOString();
  }



  await updateDoc(
    doc(db, "problems", id),
    {
      revisionStage:
        nextStage,
      nextRevision,
    }
  );
};


