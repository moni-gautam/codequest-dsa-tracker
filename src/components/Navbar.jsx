import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Navbar({ user }) {

  const handleLogout = async () => {
    await signOut(auth);
  };

  const copyUID = () => {
    navigator.clipboard.writeText(
      user?.uid
    );

    alert("UID Copied ✅");
  };

  return (
    <nav className="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 mb-8 shadow-lg">

      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          🚀 CodeQuest
        </h1>

        <p className="text-gray-400 text-sm">
          AI-Powered DSA Progress Tracker
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-semibold text-white">
            {user?.displayName}
          </p>

          <p className="text-sm text-gray-400">
            {user?.email}
          </p>

          <div className="flex items-center justify-end gap-2 mt-1">

            <span className="text-xs text-blue-400">
              UID: {user?.uid?.slice(0, 10)}...
            </span>

            <button
              onClick={copyUID}
              className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
            >
              Copy
            </button>

          </div>

        </div>

        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-blue-500"
        />

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;