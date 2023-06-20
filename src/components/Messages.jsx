import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"

const NewMessages = () => {
    const [newMessage, setNewMessage] = useState('')
    const [allUserMessages, setAllUserMessages] = useState([])
    const { postId } = useParams();

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
            const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
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
            setNewMessage(result.data.message.content)
            setAllUserMessages([...allUserMessages, newMessage])
            console.log(allUserMessages)
         } catch (error) {
            console.log(error)
        }
    } 
  
    return (
        <>
            <h2>Message the Owner</h2>
            <form onSubmit={postMessages}>
                <label htmlFor="message">Enter your message below:</label>
                <br/>
                <input 
                name="message"
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