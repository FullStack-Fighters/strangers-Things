 import { Link } from "react-router-dom"
 
 export default function NavBar(){
    return (
        <div className="header">
        <img id="logo"  />
        <p>Home Page</p>
        <button id="homeButton"><Link to="/">Home</Link></button>
        <button id="loginButton"><Link to="/login">Login</Link></button>
        <button id="newPostButton"><Link to="/new-post">Add New Post</Link></button>
        <button id="messageButton"><Link to="/owner">My Messages</Link></button>
      </div>
    )
 }