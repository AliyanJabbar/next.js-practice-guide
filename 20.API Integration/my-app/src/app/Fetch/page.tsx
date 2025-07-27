import React from "react";
import {fethcing} from "../services"
const ApiFetch = async () => {
    const data = await fethcing("https://simple-books-api.glitch.me/books")
  return (
    <ol className="list-decimal list-inside">
    {data.map((elem:any,i:number)=><li key={i} className="text-center m-2"> {elem.name} </li>)}
  </ol>
  )
};

export default ApiFetch;
