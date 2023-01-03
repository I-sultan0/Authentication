import React, { useState } from "react";
import classes from "./Email.module.css";

const Email = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  const emailChangeHandler = (e) => {
    setEmailValue(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassValue(e.target.value);
  };
  const signupHandler = () => {
    setLoggedIn(false);
  };
  const loginHandler = () => {
    setLoggedIn(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { email: emailValue, password: passValue };

    console.log(data);

    setEmailValue("");
    setPassValue("");
  };

  return (
    <div className={classes.emailDiv}>
      <form onSubmit={submitHandler}>
        <div>
          <h4>{loggedIn ? "Log In" : "Sign Up"}</h4>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            placeholder="Enter Email"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={passValue}
            onChange={passwordChangeHandler}
            placeholder="Enter Password"
          />
        </div>

        <button type="submit">{loggedIn ? "Login" : "Signup"}</button>
        {loggedIn && (
          <p>
            Are you a new User?{" "}
            <span className={classes.span} onClick={signupHandler}>
              Sign Up!
            </span>
          </p>
        )}
        {!loggedIn && (
          <p>
            Already Sign Up?{" "}
            <span className={classes.span} onClick={loginHandler}>
              Log in
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Email;
