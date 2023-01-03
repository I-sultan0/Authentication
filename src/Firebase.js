import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR98eAk6HbwlskmhhhIV8UlLJSdh_qXaU",
  authDomain: "authentication-fda63.firebaseapp.com",
  projectId: "authentication-fda63",
  storageBucket: "authentication-fda63.appspot.com",
  messagingSenderId: "740791781757",
  appId: "1:740791781757:web:7865aebbc7945e23c96414",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      //   console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      //   console.log(profilePic);

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
