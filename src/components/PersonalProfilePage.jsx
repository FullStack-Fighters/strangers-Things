import { useState, useEffect, React } from "react";
import { BASE_URL, currentToken} from "../components/index"
import "../App.css"
import MessagesFromOthers from "./MessagesReceived";


const MyProfile = () => {
    const [myPosts, setMyPosts] = useState([])
    const [myId, setMyId] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myUsername, setMyUsername] = useState("")
    const [myMessages, setMyMessages] = useState([])
    const [myProfileData, setMyProfileData] = useState({})
    
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
            setMyProfileData(response.data);
            setMyPosts(response.data.posts)
            setMyId(response.data._id) 
            setMyTitle(response.data.title)
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
            <div>
                <h2>Your Item Messages</h2>
                {
                    myMessages && myMessages.length  ? (myMessages.map((ele, idx) =>{
                        return (
                            <div key={idx}>
                                <p>Item: {myTitle}</p>
                                <p>{ele.content}</p>

                            </div>
                        )
                    }))                 
                 : <p>You have no messages.</p>
                }
            </div>
            <div>
                <MessagesFromOthers />
            </div>
        </div>

        </>
    )
}

export default MyProfile