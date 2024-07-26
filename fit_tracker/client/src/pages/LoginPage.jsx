import { useState } from "react";
import Header from "../components/Header";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const viewLogin = (status) => {
    setIsLogin(status);
    setError(null);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      (!isLogin && !name) ||
      (!isLogin && !confirmPassword)
    ) {
      return setError("All fields are required!");
    }

    if (!isLogin && password !== confirmPassword) {
      return setError("Passwords does not match!");
    }

    if (!isLogin && !validator.isEmail(email)) {
      return setError("Invalid Email");
    }

    const payload = { email, password };

    if (!isLogin) payload.name = name;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/auth/${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.status === 400) {
        setError(`${email} already exists`);
        return;
      }

      if (response.status === 401) {
        return setError(data.message);
      }

      if (response.status === 200) {
        alert(data.message);

        if (endpoint === "signin") {
          const accessToken = data.accessToken;
          // Perform any state updates or context updates
          // Example: update your context to set the authentication state
          // authContext.login(accessToken);
          navigate("/"); // Redirect to the dashboard
        } else if (endpoint === "signup") {
          viewLogin(true);
        }
      }
    } catch (error) {
      console.error("Error during login/signup:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="LoginPage">
      <Header />
      <div className="login-container">
        <form>
          <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
          {!isLogin && (
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          {isLogin && (
            <a href="/" className="forgot-password">
              Forgot Password?
            </a>
          )}
          <p className={`display-error ${error ? "active" : ""}`}>{error}</p>
          <input
            type="submit"
            className="submit-btn"
            value={isLogin ? "Sign In" : "Sign Up"}
            onClick={(e) => handleSubmit(e, isLogin ? "signin" : "signup")}
          />
          <div className="divider-container">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <button
            className="option-btn"
            onClick={() => viewLogin(!isLogin)}
            type="button"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
