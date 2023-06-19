import React from "react";
import { useState, useEffect } from "react";
import { CategoryBar, SinglePost, AddPost } from "../zcompConnect";
import { fetchApi } from "../index";
import "./Homepage.css";

export default function HomePage() {
  const [searchedItem, setSearchedItem] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [destination, setDestination] = useState()

  const filteredPosts = allPosts.filter((targetedPost) => {
   let PostInQuestion = targetedPost.title.toLowerCase();
   let searchQuery = searchedItem.toLowerCase()

   if (PostInQuestion.includes(searchQuery)){
    return targetedPost
   }
  })


  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchApi();
        setAllPosts(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [allPosts]);

  return (
    <div>
      <div className="searchbar">
       <div>
        <form>
          <input
            id="searchbar"
            type="text"
            value={searchedItem}
            placeholder="search here "
            onChange={(e) => {
              setSearchedItem(e.target.value);
              console.log(searchedItem);
            }}
          ></input>
        </form>
        </div>
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
