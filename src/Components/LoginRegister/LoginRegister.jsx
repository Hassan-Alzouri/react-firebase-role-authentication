import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import "./LoginRegister.css";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => email.endsWith("@gmail.com");

  const validatePassword = (password) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);

  const handleSignup = async () => {
    setError("");
    if (!validateEmail(email)) {
      return setError("Email must end with @gmail.com");
    }
    if (!validatePassword(password)) {
      return setError("Password must be at least 6 characters and contain letters and numbers");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    if (!agreedToTerms) {
      return setError("You must agree to the terms and conditions");
    }

    try {
      const docRef = doc(db, "users", email);
      const userSnapshot = await getDoc(docRef);
      if (userSnapshot.exists()) {
        return setError("Email is already registered");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(docRef, {
        uid: user.uid,
        email: email,
        createdAt: new Date().toISOString(),
      });

      setIsRegistering(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreedToTerms(false);
    } catch (err) {
      console.error(err);
      setError("Failed to sign up. Try again.");
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={`wrapper ${isRegistering ? "active" : ""}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign In</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={!validateEmail(email) && email ? "error" : ""}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={!validatePassword(password) && password ? "error" : ""}
            />
            <FaLock className="icon" onClick={() => setShowPassword(!showPassword)} />
          </div>

          {error && <p className="status error">{error}</p>}

          <button onClick={handleLogin}>Sign In</button>

          <div className="register-link">
            <p>
              Don't have an account?
              <a onClick={() => { setIsRegistering(true); setError(""); }}> Register</a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={!validateEmail(email) && email ? "error" : ""}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={!validatePassword(password) && password ? "error" : ""}
            />
            <FaLock className="icon" onClick={() => setShowPassword(!showPassword)} />
          </div>

          <div className="input-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={password !== confirmPassword && confirmPassword ? "error" : ""}
            />
            <FaLock className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
          </div>

          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
              />
              I agree to the terms & conditions
            </label>
          </div>

          {error && <p className="status error">{error}</p>}

          <button className="submitSignUp" onClick={handleSignup}>Sign Up</button>

          <div className="register-link">
            <p>
              Already have an account?
              <a onClick={() => { setIsRegistering(false); setError(""); }}> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
