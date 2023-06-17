import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registeredUser() {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const data = await response.json();
      console.log("useEffect fired");
      console.log(data);
      if (!data.success) {
        console.log("username or password are incorrect");
      } else {
        localStorage.setItem("token", data.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("LoginPage register ", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit fired");
    registeredUser();
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button><Link to="/register">Register Here</Link></button>
      </div>
    </>
  );
}
