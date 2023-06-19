import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"

const MessagesFromOthers = () => {
    const [messagesFromOthers, setMessagesFromOthers] = useState([])
    const [userId, setUserId] = useState("")
    const [ownerId, setOwnerId] = useState("")
    const [title, setTitle] = useState("")

    useEffect( ()=>{
        const getMessagesFromOthers = async () => {
            try {
                const response = await fetchApi()
                let allMessages = response.messages
                allMessages.map((ele)=> {
                    setUserId(ele.author._id)
                    setOwnerId(ele.fromUser._id)
                    setTitle(ele.title)
                    if (messagesFromOthers && userId != ownerId) { setMessagesFromOthers(ele.messages)
                    }
                    
                })
                       
            } catch (error) {
                console.log(error)
            }
        }
            getMessagesFromOthers()
    }, [])
    

    return(
        <div>
            <h2>What are People Saying?</h2>
            <p>Post Title: {title}</p>
            <p>Message: {messagesFromOthers}</p>
            <p>From User: {userId}</p>
        </div>

    )

}

export default MessagesFromOthers