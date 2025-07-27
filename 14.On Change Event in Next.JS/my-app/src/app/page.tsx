"use client";

import { useState } from "react";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const [radioVal, setRadioVal] = useState("");

  return (
    <div className="flex flex-col justify-center items-center space-y-5 my-56">
      <h1 className="text-5xl font-bold text-blue-700">On Change Handle</h1>

      <input
        type="text"
        placeholder="Write something here..."
        className="border px-3"
        onChange={(event) => setInputVal(event.target.value)} // onChange fire the code which is returned, whenever it is change.
        value={inputVal} //jo input ki value hai woh inputVal me store hai or input ki value woh hai jo inputVal me store hai means now it is a round circle process.
      />
      <label htmlFor="optYes">
        <input type="radio" id="optYes" name="opt" value="Haan" onChange={(e)=>setRadioVal(e.target.value)}/>
        Yes
      </label>
      <label htmlFor="optNo">
        <input type="radio" id="optNo" name="opt" value="Nhi" onChange={(e)=>setRadioVal(e.target.value)}/>
        No
      </label>

      <h1 className="text-3xl font-bold text-red-500">{inputVal}</h1>

      <h1 className="text-4xl font-bold text-red-500">{radioVal}</h1>
    </div>
  );
}
