 import { Link } from "react-router-dom"
 import { currentToken } from "."
 
 export default function NavBar(){
    return (
        <div className="header">
        <button id="homeButton"><Link to="/">Home</Link></button>

        {currentToken?
        <div>
        <button id="newPostButton"><Link to="/new-post">Add New Post</Link></button>
        <button id="profileButton"><Link to="/owner">My Profile</Link></button>
        </div>
        :
        <button id="loginButton"><Link to="/login">Login</Link></button>

      }
      </div>
    )
 }