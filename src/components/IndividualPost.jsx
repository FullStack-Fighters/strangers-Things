import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./index";

// Note for anyone viewing examining this code for best practice 
// this api does not have a function for retriving a single post by use of id. 
// We understand that mapping through is not the most effective way to accomplish our goal but it is a viable one with the low number of posts on this api


export default function renderPost() {
  const [allPosts, setAllPosts] = useState([])
  const {postid} = useParams()
  const [postInUse, setPostInUse] = useState({})
  const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
  const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`
  
  useEffect(()=>{
   const fetchApi = async () => {
      try {
          const response = await fetch(`${BASE_URL}/posts`)
          const data = await response.json()
          setAllPosts( data.data.posts)
          console.log("got to point a")
          data.data.posts.filter((targetedPost)=>{
            console.log("got to point b")
            if (targetedPost._id.toLowerCase() == postid.toLowerCase()){
              console.log("got into the if block")
      setPostInUse(targetedPost)
    }
          })
      } catch (error) {
          console.log(error)
      }
  
  }
  fetchApi()
},[])
console.log(postInUse)


  // const filteredPost = allPosts.filter(async (targetedPost)=>{
  //   
  // })

  return (
    <>
    {postInUse ? ()=>{
      return(
        <>
        <h1>postInUse.title</h1>
        </>
      )
    }:<h2>Loding...</h2> }
      <h1>I am a unique page.. well eventually i will be...</h1>
    </>
  );
}
