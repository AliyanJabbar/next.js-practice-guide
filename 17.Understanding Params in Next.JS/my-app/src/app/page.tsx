import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl mt-10">Params</h1>
      <ul className="text-center text-2xl mt-10 underline">
        <li>
          <Link href="/aliyan">aliyan ke page pe jaen</Link>
        </li>
        <br />
        <li>
          <Link href="/rohan">rohan ke page pe jaen</Link>
        </li>
        <br />
        <li>
          <Link href="/rayan">rayan ke page pe jaen</Link>
        </li>
      </ul>
    </>
  );
}
