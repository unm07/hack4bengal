import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User login successful
        const user = userCredential.user;
        console.log("User logged in:", user);
        // Store the email in localStorage
        localStorage.setItem("loggedInEmail", email);
        // Redirect to the home page
        navigate("/home");
      })
      .catch((error) => {
        // An error occurred during user login
        const errorMessage = error.message;
        console.log("Error logging in:", errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          placeholder="   Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="   Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        Not registered yet? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
