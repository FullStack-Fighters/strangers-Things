 import { Link } from "react-router-dom"
 import { currentToken } from "."
 
 export default function NavBar(){
   function reload(){
     window.location.reload(true);
    }
    function logout(){
      localStorage.clear();
      reload()
    }

    return (
        <div className="header">
        <div id="logoBox">
          <h1 id="title"><Link to="/" id="title">Not Craigslist</Link></h1>
          <h5>because it actually looks good</h5>
        </div>
        <div>
        {currentToken?
        <div id="buttonBox">
        <button id="navButtons" ><Link id="noDecoration"to="/new-post">Add New Post</Link></button>
        <button id="navButtons"><Link id="noDecoration" to="/owner">My Profile</Link></button>
        <button  id="navButtons" onClick={logout} type="submit">Logout</button>
        </div>
        :
        <button id="navButtons"><Link to="/login">Login</Link></button>
      }
      </div>
      </div>
    )
 }