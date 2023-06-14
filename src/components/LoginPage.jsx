import { useState, useEffect } from "react";
const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("submit worked YAY")
  }

  useEffect (()=>{
    async () =>{
        try {
            const results = await fetch(`${BASE_URL}/users/register`);
            
        } catch (error) {
            console.log("LoginPage register ", error)
        }
    }
  })

  return (
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
  );
}
