import React from "react";
import { CategoryBar, Post } from "../zcompConnect";
import "./Homepage.css";

export default function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <div class="header">
        <img id="logo" src="falconLogo.png" />
        <button id="loginButton">Login</button>
      </div>
      <div class="categories">
        {/* i dont know if we want to hard code in the catagories or not. i am going to hard code them in and we can change it late if needs be */}
        <CategoryBar />
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
