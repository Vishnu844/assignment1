import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {
  let navigate = useNavigate();

  let userNameInputRef = useRef();
  let passwordInputRef = useRef();

  let validateCredentials = async () => {
    if (
      userNameInputRef.current.value !== null &&
      passwordInputRef.current.value !== null
    ) {
      if (
        userNameInputRef.current.value === "foo" &&
        passwordInputRef.current.value === "bar"
      ) {
        navigate("/home");
      } else if (
        userNameInputRef.current.value !== "foo" ||
        passwordInputRef.current.value !== "bar"
      ) {
        alert("Incorrect Username or Password");
      }
    } else {
      alert("Please enter valid credentials");
    }
  };
  return (
    <div className="container">
      <form>
        <h2>Welcome!!</h2>
        <div className="formGroup">
          <label>Username</label>
          <input ref={userNameInputRef}></input>
        </div>
        <div className="formGroup">
          <label>Password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div className="formGroup">
          <button
            type="button"
            onClick={() => {
              validateCredentials();
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
