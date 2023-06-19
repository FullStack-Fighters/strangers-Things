import { useState, useEffect, React } from "react";
import { BASE_URL, currentToken} from "../components/index"
import "../App.css"


const SentMessages = () => {
    const myUserData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
      });
      const result = await response.json();
      console.log("is there a result?")
      return(result)
    } catch (error) {
      console.log(error);
    }
    myUserData
  } 
    return (
        <>
        <p>Hello World!</p>
        {
            <p>My Posts: {myUserData.posts}</p>
        }
        </>
    )
}

export default SentMessages