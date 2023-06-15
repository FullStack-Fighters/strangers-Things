 import { Link } from "react-router-dom"
 
 export default function NavBar(){
    return (
        <div className="header">
        <img id="logo"  />
        <p>Home Page</p>
        <button id="loginButton"><Link to="/login">Login</Link></button>
      </div>
    )
 }