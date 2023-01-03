import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Email.module.css";

const Email = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    // const data = { email: emailValue, password: passValue };

    // console.log(data);

    setLoading(true);

    let url;
    if (loggedIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAR98eAk6HbwlskmhhhIV8UlLJSdh_qXaU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAR98eAk6HbwlskmhhhIV8UlLJSdh_qXaU";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        navigate("/home");
        console.log(res.json);
        return res.json;
      } else {
        return res.json().then((data) => {
          //show an error modal
          let errorMessage = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          console.log(errorMessage);
          alert(errorMessage);
          throw new Error(errorMessage);
        });
      }
    });

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

        {!loading && (
          <button type="submit">{loggedIn ? "Login" : "Signup"}</button>
        )}
        {loading && <button>Loading...</button>}
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
