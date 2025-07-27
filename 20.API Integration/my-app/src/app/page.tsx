import Link from "next/link";

export default function Home() {
  return (
  <div className="text-center">
      <h1 className="text-3xl m-5">API (Application Programming Interface)</h1>
      <p className="text-xl m-3">An Application programming interface is a way for two or more computer programs to comunicate with each other</p>
      <h2 className="text-xl mt-10 mb-7">API Methods:</h2>
    <ul className="list-disc list-inside space-y-2 ">
      <li>GET request / For Read</li>
      <li>POST request / For Create</li>
      <li>PATCH request / For Update</li>
      <li>Delete request / For Delete</li>
    </ul>
    
    <Link className="p-5 bg-black rounded text-white relative top-[100px]" href="/Fetch">Go to the API route</Link>
  </div>
  );
}
