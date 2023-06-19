import { useState, useEffect, React } from "react";
import { BASE_URL, currentToken} from "../components/index"
import "../App.css"


const SentMessages = () => {
    const [myPosts, setMyPosts] = useState([])
    const [myId, setMyId] = useState("")
    
    const myUserData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
      });
      const result = await response.json();
      setMyId(result._id) 
    } catch (error) {
      console.log(error);
    } myUserData()
    }
    return (
        <div>
            <p>Hello World!</p>
            <p>Posts {myId}</p>

            {console.log(myPosts)}
        </div> 
    )
}

export default SentMessages