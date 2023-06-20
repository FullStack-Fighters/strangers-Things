import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



// Note for anyone viewing examining this code for best practice
// this api does not have a function for retrieving a single post by use of id.
// We understand that mapping through is not the most effective way to accomplish our goal but it is a viable one with the low number of posts on this api

export default function RenderPost() {
  const [allPosts, setAllPosts] = useState([]);
  const { postId } = useParams();
  const [postInUse, setPostInUse] = useState([]);
  const navigate =useNavigate()
  const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`;

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        setAllPosts(data.data.posts);

        allPosts.filter((targetedPost) => {
          if (targetedPost._id == postId) {
            setPostInUse(targetedPost);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

    const handleClick = () => {
      navigate(`/posts/${postId}/send-message`)
    }

  return (
    <>

      {postInUse ? (
            <div>
              <h1>{postInUse.title}</h1>
              <h6>Posted: {postInUse.createdAt}, <br/> Last Modified: {postInUse.updatedAt}</h6>
              
              <p>{postInUse.description}</p>
              <p>location: {postInUse.location}</p>
              <p>Price: {postInUse.price}</p>
              {postInUse.isAuthor? <button>delete</button>: <p>only authors of posts can delete posts</p>}
            </div>
          
          ) : (
            <h2>Loading...</h2>
            )}
      <button onClick={handleClick} value="messageButton">Message the Owner!</button>
    </>
  );
}
