import { useState, useEffect } from "react";
import { BASE_URL, currentToken } from "../components/index"
import "../App.css"

const MessagesFromOthers = () => {
    const [allMessages, setAllMessages] = useState([])
    const [posts, setPosts] = useState([])

    useEffect( ()=>{
        const getPosts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentToken}`
                    }
                })
                const result = await response.json()
                setPosts(result)
                setAllMessages(result.messages)
            } catch (error) {
                console.log(error)
            }
        }
            getPosts()
    }, [])

    return(
        <div>
            <h2>Messages about Your Stuff</h2>
            <div>
                { 
                allMessages && allMessages.length ? 
                (posts.map ((ele, idx) => {
                    return(
                        <div key={idx}>
                            <p><b>{ele.title}</b>{ele.message.content}</p>
                        </div>
                    )
                    }
                )) : 
                    <p>You have no messages.</p>
                }
            </div>
        </div>

    )

}

export default MessagesFromOthers