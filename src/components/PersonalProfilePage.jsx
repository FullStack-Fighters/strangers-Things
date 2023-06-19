import { useState, useEffect, React } from "react";
import { BASE_URL, currentToken} from "../components/index"
import { NewMessages } from "./zcompConnect";
import "../App.css"


const MyProfile = () => {
    const [myPosts, setMyPosts] = useState([])
    const [myId, setMyId] = useState("")
    const [myUsername, setMyUsername] = useState("")
    const [myMessages, setMyMessages] = useState([])
    const [myProfileData, setMyProfileData] = useState([])
    
    const myUserData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
      });
      const result = await response.json();
      return result
            
    } catch (error) {
        console.log(error);
    } 
}

useEffect(() => {
    const getUserData = async () => {
        try {
            const response = await myUserData();
            console.log(response)
            setMyProfileData(response.data);
            setMyPosts(response.data.posts)
            setMyId(response.data._id) 
            setMyUsername(response.data.username)
            setMyMessages(response.data.messages)
    } catch (error) {
    console.log(error);
    }
    };
    getUserData();
  }, []);

    return (
        <>
        <div>
            <h2>Hello {myUsername}</h2>
            {console.log(myMessages)}
            <div>
                {
                    myMessages && myMessages.length  ? (myMessages.map((message, idx) =>{
                        return (
                            <div key={idx}>
                                <h2>Your Messages</h2>
                                <p>{message}</p>

                            </div>
                        )
                    }))                 
                 : <p>You have no messages.</p>
                }
            </div>
        </div>

        </>
    )
}

export default MyProfile