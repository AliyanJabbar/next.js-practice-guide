 "use client"
 import { useState , useEffect} from "react";

//  useCase:
// useState value ko update karne ke liye use krte hain and useEffect tab use krte hain jab humen koi bolck of code tab run krna ho jab koi vlaue change ho ya phir render ho. we use useEffect in fetching data and to show the newest data present

export default function Func(){
const [counter, setcounter] = useState(0)
const [counter2, setcounter2] = useState(0)

// useEffect:
// useEffect takes two parameters, one is callback function and another is an array which will contain all the dependencies on which useEffect depends.At first when the page loads or the component renders first time, the useEffect function fire. If we give dependencies than useEffect will only fire when the dependency changes. If dependencies or array is not given than Whenever the component renders or changes, every time UseEffect will also fire.If there is an empty array than useEffect will only fire once at the start when the component loads or renders first time.

useEffect(()=>{
  console.log("1st UseEffect function fire!!!")
},[])

useEffect(()=>{
  console.log("2nd UseEffect function fire!!!")
},[counter])

useEffect(()=>{
  console.log("3rd UseEffect function fire!!!")
},[counter2])

useEffect(()=>{
  console.log("4th UseEffect function fire!!!") // it means every time we get latest data when we update counter or counter2
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
},[counter,counter2])

return(
  <div>
    <h1>UseEffect</h1>
    <h2>React Hook</h2>
<br />
    <button onClick={()=>setcounter(counter+1)}>Counter1 Increament = {counter}</button>
    <br />
    <button onClick={()=>setcounter2(counter2+2)}>Counter2 Increament = {counter2}</button>
  </div>
)
}
