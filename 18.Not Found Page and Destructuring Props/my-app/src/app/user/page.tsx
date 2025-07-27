import Link from "next/link"
export default function User(){
    return(
        <>
            <h1 className="text-center text-4xl text-green-600 mt-12">User Static Page</h1>
            <h3 className="mx-auto w-fit text-3xl text-blue-600 mt-12 underline decoration-black hover:decoration-red-600 hover:font-bold"><Link href="/">Go Back To Home Page</Link></h3>
        </>
    )
}