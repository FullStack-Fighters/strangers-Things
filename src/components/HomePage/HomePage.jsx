import React from "react";
import { useState, useEffect } from "react";
import { CategoryBar, Post } from "../zcompConnect";
import { fetchApi } from "../index";
import "./Homepage.css";

export default function HomePage() {
  const [searchedItem, setSearchedItem] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const getPosts = async (props) => {
        console.log("hi am props ",  props)
      try {
        const response = await fetch(fetchApi);
        const data = response.json();
        console.log(data.data.posts);

        setAllPosts(data.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <div class="categories">
        {/* i dont know if we want to hard code in the catagories or not. i am going to hard code them in and we can change it late if needs be */}
        <CategoryBar />
      </div>
      <div class="searchbar">
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
      <div class="cardBox">
       { allPosts && allPosts.length ? 
            allPosts.map((element) => {
                return(
                <SinglePost key={props._id} element={props.element}/>
                )
            })
        : <h2>Loading...</h2>}
      </div>
    </div>
  );
}
