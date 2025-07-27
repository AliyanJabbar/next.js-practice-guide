"use client"

import { useState } from "react"

export default function Home() {

// hum variable ki value ko direct change nhi kr sakte is liye humen useState ka use krna padta hai

  const [name , setName] = useState("ali")
  const [age, setAge] = useState(16)
// let name= "ali"


 const changeName =()=>{
  name === "ali"?setName("zain"):setName("ali")
} 
 const changeAge =()=>{
  age === 16?setAge(18):setAge(16)
} 

 return (
    <div>
      <h1>Use state</h1>
      <h2>React ka Hook</h2>
      <br />
      <p>{name} is {age}</p>
      <br />
      <button onClick={changeName}>Click Me To Change Name</button>
      <br />
      <button onClick={changeAge}>Click Me To Change Age</button>
    </div>
  );
}
