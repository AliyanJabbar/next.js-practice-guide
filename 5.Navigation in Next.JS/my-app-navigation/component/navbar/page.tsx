import Link from "next/link" //using link instead of anchor tag to ensure speed and not to reload all

export default function NavBar(){
    return (
        <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
    )
}