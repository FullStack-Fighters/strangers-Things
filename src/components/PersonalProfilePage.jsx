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
            <h4>Hello {myUsername}</h4>
            <div>
                <h2>Your Sent Messages</h2>
                {
                    myMessages && myMessages.length ? (myMessages.map((ele, idx) =>{
                        return (
                            <div key={idx}>
                                <p><b>{ele.post.title}:</b> {ele.content}</p>
                            </div>
                        )
                    }))                 
                 : <p>You have no messages.</p>
                }
            </div>
            <div>
                <MessagesFromOthers />
            </div>
            <div>
                <h2>Your Posts</h2>
            </div>
            {
                myProfileData && myProfileData.length ? (myProfileData.map((ele, idx) =>{
                    return (
                         <div key={idx} className="itemCard">
                            <div className="innerCard">
                            <h2>{ele.title}</h2>
                            <p>Description: {ele.description}</p>
                            <p>Price: {ele.price}</p>
                            <p>Location: {ele.location}</p>
                            <div>
                                {
                                ele.willDeliver == true ? 
                                <p>Delivery Available</p> 
                                : <p>Pickup Only</p>}
                            </div>
                            </div>
                            </div>
                    )
                }))                 
                : <p>You do not have anything listed.</p>
            }


        </div>

        </>
    )
}

export default MyProfile