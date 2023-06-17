const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";




const SinglePost = (props) => {
    const [allPosts, setAllPosts] = useState([props.allPosts])
    const navigate =useNavigate()
    const [destination, setDestination] = useState()
    // console.log("HELLOOOOO", props)

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
  const handleClick = ()=>{
    navigate(`/posts/${props.element._id}`)

  }

  return (
    <div className="itemCard"  onClick={handleClick}>
      <h2>Name of Item: {props.element.title}</h2>
      {/* <Link to={`/posts/${props.element._id}`}>See More</Link> */}
      <p>id: {props.element._id}</p>
      <p>Description: {props.element.description}</p>
      <p>Price: {props.element.price}</p>
      <p>Location: {props.element.location}</p>
      {/* <p>Delivery Available: {({props.post.willDeliver} ? "Yes" : "No, pickup only")}</p> */}
      <p>Message owner: {props.element.author._id}</p>
            
      <button onClick={deletePost} value={props.element.id}>
        Delete Product #{props.element.name}
      </button>
    </div>
  );
}

export default SinglePost;
