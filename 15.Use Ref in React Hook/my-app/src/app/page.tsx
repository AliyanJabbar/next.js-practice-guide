// Video Link: https://www.youtube.com/watch?v=qv2YPOnDwvA

// Example 1:
// "use client";

// import { useEffect, useState, useRef } from "react";

// export default function UseRef() {
//   const [myData, setMyData] = useState("");
//   //  const [renderCount, setRenderCount] = useState(0) //it is causing infinite loop with useEffect

//   const renderCount = useRef<number>(0);
//   //  useRef creates a mutable variable which will not re-render the components. It is also used to access a Dom element directly .useRef returns an object
//   console.log("render Count:", renderCount.current);

//   useEffect(() => {
//     //  setRenderCount(renderCount+1)
//     renderCount.current++;
//   });

//   return (
//     <div className="flex flex-col justify-center items-center text-center my-52">
//       <input
//         className="border"
//         type="text"
//         placeholder="Write Something Here"
//         value={myData}
//         onChange={(event) => {
//           setMyData(event.target.value);
//         }}
//       />
//       <h1 className="text-3xl">Render Count is {renderCount.current}</h1>
//     </div>
//   );
// }

// Example2
"use client";

import { useState, useRef } from "react";

export default function GettingInputValUsingUseRef() {
  const [myData, setMyData] = useState("");
  const inputElem = useRef<HTMLInputElement>(null);

  const changeStyle = () => {
     if(inputElem.current){
    inputElem.current.style.backgroundColor === 'blue' ? inputElem.current.style.backgroundColor ='white' : inputElem.current.style.backgroundColor ='blue'
    inputElem.current.style.color === 'white' ? inputElem.current.style.color = 'black': inputElem.current.style.color = 'white'
     }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center my-52">
      <input
        className="border"
        ref={inputElem}
        type="text"
        value={myData}
        onChange={(e) => {
          setMyData(e.target.value);
        }}
      />
      <br />
      <button className="border bg-black text-gray-50 px-5 py-2 rounded-lg" onClick={changeStyle}>Change Style</button>
    </div>
  );
}
