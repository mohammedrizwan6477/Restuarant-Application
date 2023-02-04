
import axios from "axios";
import React, { useState } from "react";

export const RestuarantCreate = () => {
  const [name, setName] = useState("");
  const [email,setEmail]=useState("")
  const [rating,setRating]=useState("")
  const [location,setLocation]=useState("")
  const [postUser,setPostUser]=useState('')
    const handleSubmitData=()=>{
      // console.log(name)
      // console.log(email)
      // console.log(rating)
      // console.log(location)
     const userData = {
        name:name,
        email:email,
        rating:rating,
        location:location
      }
      const postData=async()=>{
        let result =await axios.post('http://localhost:3000/restaurant',userData);
        console.log(result.data)
      }
      postData()
    }
    

  return (
    <div>
      <h3>Restuarant Create</h3>
      <br />
      <br />
      <input
        type="text"
        placeholder="Restuarant Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Restuarant Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Restuarant Rating"
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Restuarant Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmitData}>Add Restuarant</button>
    </div>
  );
};
