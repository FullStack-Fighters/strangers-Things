import { useState, useEffect } from "react"
import { fetchApi, BASE_URL, currentToken } from "./index"
import { useNavigate, Link } from "react-router-dom";

const AddPost = () => {
    const [allPosts, setAllPosts] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newWillDeliver, setNewWillDeliver] = useState("")
    const navigate =useNavigate()

    useEffect( () => {
        const getData = async () => {
            try {
                const response = await fetchApi()
                setAllPosts(response) 
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
  

    const sendPostRequest = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${currentToken}`
                }, 
                body: JSON.stringify({
                     post: {
                        title: newTitle,
                        description: newDescription,
                        price: newPrice,
                        location: newLocation,
                        willDeliver: newWillDeliver
                    }
                })
            });
            const data = await response.json();
            setAllPosts([...allPosts, data])
            console.log("UPDATED POST LIST", allPosts)
            } catch (error) {
                console.log (error)
        }
    }

    return (
      <>
        <form onSubmit={sendPostRequest}>
          <label htmlFor="title">Name:</label>
          <br />
          <input
            name="title"
            type="text"
            placeholder="Name of Item"
            value={newTitle}
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          ></input> <br />

          <label htmlFor="description">Enter Item Description Below:</label>
          <br />
          <input
            name="description"
            type="text"
            placeholder="New Item Description Goes Here"
            value={newDescription}
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          ></input> <br />

          <label htmlFor="price">Enter Item Price:</label>
          <br />
          <input
            name="price"
            type="text"
            placeholder="Enter Price Here"
            value={newPrice}
            onChange={(event) => {
              setNewPrice(event.target.value);
            }}
          ></input> <br />

          <label htmlFor="location">Enter Your Location:</label>
          <br />
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={newLocation}
            onChange={(event) => {
              setNewLocation(event.target.value);
            }}
          ></input> <br />

          <fieldset>
              <legend>Pickup or Delivery:</legend>
              <div>
                <label htmlFor="willDeliver">Available for Delivery </label>
                <input 
                  type="radio" 
                  id="willDeliver" 
                  name="willDeliver" 
                  value={newWillDeliver}
                  onChange={(event)=> {
                    setNewWillDeliver(event.target.value)
                  }
                  }>
                  </input> 
              </div>
              <div>
                <label htmlFor="willDeliver">Pickup Only </label>
                <input 
                  type="radio" 
                  id="willDeliver" 
                  name="willDeliver" 
                  value={newWillDeliver}
                  onChange={()=> {
                    setNewWillDeliver(false)
                  }
                  }>
                  </input> 
              </div>
          </fieldset>

          <button type="submit">Submit!</button>
        </form>
      </>
    );
}
export default AddPost