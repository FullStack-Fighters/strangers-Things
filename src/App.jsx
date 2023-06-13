import './App.css'
import { Routes, Route } from 'react-router-dom'
import {fetchApi} from "./components/index"
import {HomePage, LoginPage} from "./components/zcompConnect"
function App() {
async function getInfo(){
  try {
    let response = await fetchApi ()
    let data = await response.json()
    return data

  } catch (error) {
    console.log (error)
  }
  
}

getInfo()
  return (
    <>
      <p>hello world</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </>
  )
}

export default App
