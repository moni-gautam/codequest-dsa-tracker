import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where
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