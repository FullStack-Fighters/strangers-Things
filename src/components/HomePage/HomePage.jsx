import React from "react";
import { useState } from "react";
import { CategoryBar, Post } from "../zcompConnect";
import "./Homepage.css";

export default function HomePage() {
  const [searchedItem, setSearchedItem] = useState("");
  return (
    <div>
      <div class="header">
        <img id="logo" src="falconLogo.png" />
        <p>Home Page</p>
        <button id="loginButton">Login</button>
      </div>
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
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
