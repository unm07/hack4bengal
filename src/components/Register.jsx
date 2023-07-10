import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registration successful
        const user = userCredential.user;
        console.log("User created:", user);
        // Redirect to the Registration Success page
        navigate("/home");
      })
      .catch((error) => {
        // An error occurred during user registration
        const errorMessage = error.message;
        console.log("Error registering user:", errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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

        <button type="submit">Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}

      <p>Already Registered? <Link to="/">Login</Link></p>
    </div>
  );
};

export default Register;
