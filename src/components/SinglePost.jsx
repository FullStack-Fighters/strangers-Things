import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL, currentToken, fetchApi} from "../components/index"
import "../App.css"




const SinglePost = (props) => {
    
    const [allPosts, setAllPosts] = useState([props.allPosts])
    const navigate =useNavigate()

  //   useEffect( () => {
  //   const getData = async () => {
  //       try {
  //           const response = await fetchApi()
  //           setAllPosts(response) 
  //       } catch (error) {
  //           console.log(error)
  //       }
  //   }
  //   getData()
  // }, [allPosts])

    const deletePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${props.element._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${currentToken}`
          }
        })
      const data = await response.json()
      console.log("I AM DATA", data)
      
      const updatedItemList = props.allPosts.filter((singleItem) => {
        if (singleItem._id != props.element._id) {
          return singleItem;
        }
      });
      console.log("updated item list", updatedItemList)
      setAllPosts(updatedItemList);
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = ()=>{
    navigate(`/`)


  }

  return (
    <div className="itemCard"  onClick={handleClick}>
      <h2>{props.element.title}</h2>
      <p>Description: {props.element.description}</p>
      <p>Price: {props.element.price}</p>
      <p>Location: {props.element.location}</p>
      <p>Delivery Available: {props.element.willDeliver}</p>
      <button>Message owner: {props.element.author._id}</button>
            
      <button onClick={deletePost} value={props.element._id}>
      Delete Product
      </button>
    </div>
  );
}

export default SinglePost;
