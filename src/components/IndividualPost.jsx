import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "./index";

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
