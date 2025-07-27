import Link from "next/link"
export default function NavBar(){
return (
    <div>
    <h3>NavBar</h3>
    <ul>
      <li> <Link href="/">Home</Link></li>
      <li> <Link href="/about">About</Link></li>
      <li> <Link href="/products">Products</Link></li>
    </ul>
    </div>
)
}