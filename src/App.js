import "./App.css";
import { signInWithGoogle } from "./Firebase";
const profileImg = localStorage.getItem("profilePic");

function App() {
  console.log(profileImg);
  return (
    <div className="App">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={profileImg} alt="Profile" />
    </div>
  );
}

export default App;
