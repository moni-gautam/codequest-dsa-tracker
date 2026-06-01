import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoAUgAc_eQv6OvF8SDnjb3L0N-5kysUB8",
  authDomain: "codequest-fdc0c.firebaseapp.com",
  projectId: "codequest-fdc0c",
  storageBucket: "codequest-fdc0c.firebasestorage.app",
  messagingSenderId: "886066891142",
  appId: "1:886066891142:web:ba2ad916f7b9bbe7b80407"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;