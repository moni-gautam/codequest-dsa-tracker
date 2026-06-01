import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Navbar() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav>
      <h2>CodeQuest</h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;