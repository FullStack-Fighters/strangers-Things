import React from "react";
import { useState, useEffect } from "react";
import { CategoryBar, SinglePost } from "../zcompConnect";
import { fetchApi } from "../index";
import "./Homepage.css";

export default function HomePage() {
  const [searchedItem, setSearchedItem] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [destination, setDestination] = useState()

  const filteredPosts = allPosts.filter((targetedPost) => {
   let PostInQuestion = targetedPost.title.toLowerCase();
   let searchQuery = searchedItem.toLowerCase()
    console.log(targetedPost)

   if (PostInQuestion.includes(searchQuery)){
    return targetedPost
   }
  })


  useEffect(() => {
    const getPosts = async () => {
        // console.log("hi am props ",  props)
      try {
        const response = await fetchApi();
        // console.log(response)
        setAllPosts(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <div className="categories">
        {/* i dont know if we want to hard code in the catagories or not. i am going to hard code them in and we can change it late if needs be */}
        <CategoryBar />
      </div>
      <div className="searchbar">
        <form>
          <label>Search Bar</label>
          <input
            type="text"
            value={searchedItem}
            onChange={(e) => {
              setSearchedItem(e.target.value);
              console.log(searchedItem);
            }}
          ></input>
        </form>
      </div>
      <div className="cardBox">
       { filteredPosts && filteredPosts.length ? 
            filteredPosts.map((element) => {
                return(
                <SinglePost key={element._id} element={element} allPosts={allPosts}/>
                )
            })
        : <h2>Loading...</h2>}
      </div>
    </div>
  );
}
