import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"

const NewMessages = () => {
    const [newMessage, setNewMessage] = useState([])
    const [postId, setPostId] = useState("")
    
    
    const getPostId = async () => {
        const response = await fetchApi()
        console.log("HELLO!!!", response._id)
        setPostId(response._id)
    }
    getPostId()

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
            console.log("POST MESSAGE RESULT:", result)
            
        } catch (error) {
            console.log(error)
        }
    } 
    useEffect( ()=> {
        const getMessages = async () => {
            try {
                const response = await postMessages()
                setNewMessage(response)
              } catch (error) {
            console.log(error)
        }
    }
    getMessages()
    }, [])

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