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
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800 p-10 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-700">

        <h1 className="text-5xl font-bold text-white mb-4">
          🚀 CodeQuest
        </h1>

        <p className="text-gray-400 mb-8">
          AI-Powered DSA Progress Tracker
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Sign in with Google
        </button>

        <div className="mt-8 text-sm text-gray-500">
          Track • Analyze • Improve
        </div>
      </div>
    </div>
  );
}

export default Login;