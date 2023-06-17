import { useState, useEffect } from "react"
import { fetchApi } from "./index"
const COHORT_NAME = "/2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api${COHORT_NAME}`;

const AddPost = () => {
    const [allPosts, setAllPosts] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newMessage, setNewMessage] = useState([])
    const [newWillDeliver, setNewWillDeliver] = useState("")

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
        console.log(event.target)
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    // "Authorization": `Bearer ${TOKEN}`
                }, 
                body: JSON.stringify({
                     post: {
                        title: setNewTitle,
                        description: setNewDescription,
                        price: setNewPrice,
                        location: setNewLocation,
                        message: setNewMessage,
                        willDeliver: setNewWillDeliver
                    }
                })
            });
            const data = await response.json();
            setAllPosts([...allPosts, data])
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
          ></input>
          <br />

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
          ></input>
          <br />

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
          ></input>
          <br />

          <label htmlFor="willDeliver">Delivery Available:</label>
          <br />
          <input
            name="price"
            type="text"
            placeholder='type "YES" or "NO"'
            value={newWillDeliver}
            onChange={() => {
              newWillDeliver === "YES" ? setNewWillDeliver(true) : setNewWillDeliver(false)
            }}
          ></input>
          <br />

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
          ></input>
          <br />

          <label htmlFor="message">Send a Message:</label>
          <br />
          <input
            name="message"
            type="textarea"
            placeholder="Message"
            rows="5"
            cols="100"
            value={newMessage}
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
          ></input>
          <br />

          {/* <fieldset>
                <legend>Select Delivery or Pickup for Item:</legend>
                <div>
                    <label htmlFor="willDeliver">Available for Delivery</label>
                    <input 
                        name="willDeliver" 
                        type="radio" 
                        id="deliver"
                        value={true}
                        onChange={
                            setNewWillDeliver(event.target.value)
                        }
                    ></input>
                </div>
                <div>
                <label htmlFor="willDeliver">Pickup Required</label>
                    <input 
                        name="willDeliver" 
                        type="radio" 
                        id="pickup"
                        value={false}
                        onChange={
                           setNewWillDeliver(event.target.value)
                        }
                    ></input>
                </div>
            </fieldset> */}

          <button type="submit">Submit!</button>
        </form>
      </>
    );
}
export default AddPost