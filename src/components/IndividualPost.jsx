import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./index";

// Note for anyone viewing examining this code for best practice 
// this api does not have a function for retriving a single post by use of id. 
// We understand that mapping through is not the most effective way to accomplish our goal but it is a viable one with the low number of posts on this api


export default function renderPost() {
//   const { postObject, setPostObject } = useState([]);
//   const uniqueItem = useParams();
//   useEffect(() => {
//     const getPosts = async () => {
//         // console.log("hi am props ",  props)
//       try {
//         console.log("made it into the try catch block")
//         const response = await fetchApi();
//         console.log(response)
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   },[])
  
//   renderPost();
//   console.log(fetchApi);

  return (
    <>
      <h1>I am a unique page.. well eventually i will be...</h1>
    </>
  );
}
