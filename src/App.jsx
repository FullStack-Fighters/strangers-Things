import "./App.css";
import { Routes, Route } from "react-router-dom";
import { fetchApi } from "./components/index";
import { HomePage, LoginPage, SinglePost, NavBar } from "./components/zcompConnect";

function App() {
  async function getInfo() {
    try {
      let response = await fetchApi();
      let data = await response.json();
      return(data)
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
      </Routes>
    </>
  );
}

export default App;
