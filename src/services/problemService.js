import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebase";

export const addProblem = async (problem) => {
  await addDoc(
    collection(db, "problems"),
    problem
  );
};

export const getProblems = async () => {
  const snapshot = await getDocs(
    collection(db, "problems")
  );


return snapshot.docs.map((doc) => ({
  ...doc.data(),
  firestoreId: doc.id,
}));
}

export const deleteProblem = async (id) => {
  await deleteDoc(
    doc(db, "problems", id)
  );
};