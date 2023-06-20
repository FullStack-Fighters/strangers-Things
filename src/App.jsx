import "./App.css";
import { Routes, Route } from "react-router-dom";
import { fetchApi } from "./components/index";
import { HomePage, LoginPage, AddPost, NavBar, RegisterPage, IndividualPost, MyProfile, NewMessages } from "./components/zcompConnect";

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
        <Route path="/posts/:postId" element={<IndividualPost />} />
        <Route path="/new-post" element={<AddPost />} />
        <Route path="/owner" element={<MyProfile />} />
        <Route path="/posts/:postId/send-message" element={<NewMessages />} />

      </Routes>
    </>
  );
}

export default App;
