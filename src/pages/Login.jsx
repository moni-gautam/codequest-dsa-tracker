import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";

function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Logged in:", result.user);

      alert(`Welcome ${result.user.displayName}`);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to CodeQuest</h1>

      <button onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;