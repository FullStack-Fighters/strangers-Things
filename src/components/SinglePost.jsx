const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`;
import { useState } from "react";

const SinglePost = (props) => {
    const [allPosts, setAllPosts] = useState[""]
  // console.log("SINGLE POST PROPS:", props.post)

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

      props.setAllPosts(updatedItemList);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Name of Item: {props.post.title}</h2>
      <p>Description: {props.post.description}</p>
      <p>Price: {props.post.description}</p>
      <p>Location: {props.post.description}</p>
      {/* <p>Delivery Available: {({props.post.willDeliver} ? "Yes" : "No, pickup only")}</p> */}
      <p>Message owner: {props.post.author._id}</p>
            
      <button onClick={deletePost} value={props.post.id}>
        Delete Product #{props.post.name}
      </button>
    </div>
  );
}

export default SingleProduct;
