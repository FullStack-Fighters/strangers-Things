import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"

const NewMessages = () => {
    const [newMessage, setNewMessage] = useState([])
    const postId = 


    const postMessages = async () => {
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
    postMessages()

    useEffect( ()=> {
        const gettMessages = async () => {
            try {
                const response = await postMessages()
                setNewMessage(response)
              } catch (error) {
            console.log(error)
        }
    }
    gettMessages()
    }, [])

    return (
        <>
            <h1>Hello World!</h1>
        </>

    )
}
export default NewMessages;