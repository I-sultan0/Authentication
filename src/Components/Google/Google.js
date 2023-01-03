import React from "react";
import classes from "./Google.module.css";
import { signInWithGoogle } from "../../Firebase";
const profileImg = localStorage.getItem("profilePic");

const Google = () => {
  return (
    <div className={classes.App}>
      <button className={classes.googleBtn} onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={profileImg} alt="Profile" />
    </div>
  );
};

export default Google;
