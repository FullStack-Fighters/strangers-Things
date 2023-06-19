import { useState, useEffect, React } from "react";
import { BASE_URL, currentToken} from "../components/index"
import { NewMessages } from "./zcompConnect";
import "../App.css"


const MyProfile = () => {
    const [myPosts, setMyPosts] = useState([])
    const [myId, setMyId] = useState("")
    const [myUsername, setMyUsername] = useState("")
    const [myMessages, setMyMessages] = useState([])
    
    const myUserData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
      });
      const result = await response.json();
      setMyPosts(result.data.posts)
      setMyId(result.data._id) 
      setMyUsername(result.data.username)
      setMyMessages(result.data.myMessages)

    } catch (error) {
      console.log(error);
    } 
    }
    myUserData()
    return (
        <>
        <div>
            <p>Hello {myUsername}</p>
            {/* <p>Posts {myPosts}</p>
            <p>Messages {myMessages}</p> */}
            {console.log(myMessages)}

            {/* <div>
                {
                    myMessages.length  ?                   
                    myMessages : <p>You have no messages.</p>
                }
            </div> */}
        </div>
        <div>
            <NewMessages />
        </div>
        </>
    )
}

export default MyProfile