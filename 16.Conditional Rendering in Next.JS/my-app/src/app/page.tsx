"use client"

import { useState } from "react";
import ForTrue from "./component/true"
import ForFalse from "./component/false"

export default function Home() {
  const [showData, setShowData] = useState(true)
  return (
    <div className="flex my-40 flex-col mx-auto">
      <h1 className="text-center text-5xl my-10 font-extrabold text-blue-600">Conditional Rendering</h1>
      {
        showData ? <ForTrue/> : <ForFalse/>
      }
      <br />
      <button className="mx-auto p-5 bg-black text-white rounded-xl" onClick={(e)=>{ setShowData(!showData);
       }}>Click</button>
      {/* showData?setShowData(false):setShowData(true) is code ki jagah yeh bhi likh sakte hain onClick function me setShowData(!showData) */}
    </div>
  );
}
