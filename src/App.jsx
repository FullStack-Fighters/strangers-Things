import "./App.css";
import { Routes, Route } from "react-router-dom";
import { fetchApi } from "./components/index";
import { HomePage, LoginPage, SinglePost, AddPost, NavBar, RegisterPage, IndividualPost, SentMessages } from "./components/zcompConnect";

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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts/:postid" element={<IndividualPost />} />
        <Route path="/new-post" element={<AddPost />} />
        <Route path="/owner" element={<SentMessages />} />
      </Routes>
    </>
  );
}

export default App;
