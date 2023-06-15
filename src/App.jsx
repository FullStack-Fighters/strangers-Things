import "./App.css";
import { Routes, Route } from "react-router-dom";
import { fetchApi } from "./components/index";
import { HomePage, LoginPage, SinglePost, AddPost, NavBar } from "./components/zcompConnect";

function App() {
  async function getInfo() {
    try {
      let response = await fetchApi();
      
    } catch (error) {
      console.log(error);
    }
  }

  getInfo()
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts/:post-id" element={<SinglePost />} />
        <Route path="/new-post" element={<AddPost />} />
      </Routes>
    </>
  );
}

export default App;
