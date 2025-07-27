import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-center text-4xl text-green-600 mt-12">Exploring Not Found Page in Next.js</h1>
    <h3 className="mx-auto w-fit text-3xl text-blue-600 mt-12 underline decoration-black hover:decoration-red-600 hover:font-bold"><Link href="https://www.youtube.com/watch?v=s6U0RTV3M68&list=PLplW4d4HPsEJEqwyRFM5c8JWBRGt_QJHZ&index=45" target="_blank">Video Link</Link></h3>
    <h3 className="mx-auto w-fit text-3xl text-blue-600 mt-12 underline decoration-black hover:decoration-red-600 hover:font-bold"><Link href="/user">Go To User's Page</Link></h3>
    </>
  );
}
