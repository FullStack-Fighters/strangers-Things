import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"

const NewMessages = (props) => {
    const [newMessage, setNewMessage] = useState([])
    const [allUserMessages, setAllUserMessages] = useState([])
    let myPostId = props.ownerPostId

    useEffect (() => {
        const getAllMessages = async () => {
            try {
                const response = await fetchApi()
                if (allUserMessages.length) {
                setAllUserMessages(response.messages.content)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        getAllMessages()
    }, [])
  
    const postMessages = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch(`${BASE_URL}/posts/${myPostId}/messages`, {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${currentToken}`
                },
                body: JSON.stringify({
                    message: {
                        content: newMessage
                    }
                })
            })
            const result = await response.json()
            if (result.data.message.content){
            setNewMessage(result.data.message.content)
            }
            setAllUserMessages([...allUserMessages, newMessage])
         } catch (error) {
            console.log(error)
        }
    } 
  
    return (
        <>
            <h1>Send a New Message</h1>
            <form onSubmit={postMessages}>
                <label htmlFor="content">Enter your message below:</label>
                <br/>
                <input 
                name="content"
                type="text"
                value={newMessage} 
                onChange={(event)=> {
                    setNewMessage(event.target.value)
                }}
                ></input>
                <button type="submit">Send Message!</button>
            </form>
            
        </>

    )
}
export default NewMessages;