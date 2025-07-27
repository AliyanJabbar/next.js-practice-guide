import Link from "next/link";

export default function Home(props: any) {
  // params sirf dynamic route me milta hai
  // params aik object hai jis ki property ki key folder ka name hai aur us key ki value woh he jo hum "local host:3000/" ke baad likhen ge
  console.log(props);
  return (
    <>
      <h1 className="text-center text-4xl mt-10">Dynamic Page</h1>
      <h2 className="text-center text-blue-700 text-3xl mt-10">
        {props.params.name}
      </h2>
      <ul>
        <li className="text-center text-2xl mt-10 underline">
          <Link href="/">Go Back</Link>
        </li>
      </ul>
    </>
  );
}
