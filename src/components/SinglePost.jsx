const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`;
import { useState } from "react";

const SinglePost = (props) => {
    const [allPosts, setAllPosts] = useState([props.allPosts])
    console.log("HELLOOOOO", props)

    const deletePost = async (event) => {
    try {
      console.log(event.target.value);
      const response = await fetch(`${BASE_URL}posts/${event.target.value}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", 
            //"Authorization": `Bearer ${TOKEN}`
          }
        })
      const data = await response.json()
      console.log(data)
      
      const updatedItemList = props.allPosts.filter((singleItem) => {
        if (singleItem.id != event.target.value) {
          return singleItem;
        }
      });

      setAllPosts(updatedItemList);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Name of Item: {props.element.title}</h2>
      <p>Description: {props.element.description}</p>
      <p>Price: {props.element.description}</p>
      <p>Location: {props.element.description}</p>
      {/* <p>Delivery Available: {({props.post.willDeliver} ? "Yes" : "No, pickup only")}</p> */}
      <p>Message owner: {props.element.author._id}</p>
            
      <button onClick={deletePost} value={props.element.id}>
        Delete Product #{props.element.name}
      </button>
    </div>
  );
}

export default SinglePost;
