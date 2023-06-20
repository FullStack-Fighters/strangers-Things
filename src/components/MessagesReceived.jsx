import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"

const MessagesFromOthers = () => {
    const [messagesFromOthers, setMessagesFromOthers] = useState([])

    useEffect( ()=>{
        const getMessagesFromOthers = async () => {
            try {
                const response = await fetchApi()
                let allMessages = response.messages
                console.log("ALL MESSAGES:", response.messages)
                allMessages.map((ele)=> {
                    if(response.isAuthor){
                        setMessagesFromOthers(ele.messages)
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
            <div>
                { messagesFromOthers && messagesFromOthers.length ? 
                <p>{messagesFromOthers}</p> : 
                    <p>You have no messages.</p>
                }
            </div>
            <p>{messagesFromOthers}</p>
        </div>

    )

}

export default MessagesFromOthers