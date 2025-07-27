import Link from "next/link"
import NavBar from "../../../component/navbar/page"
export default function Products(){
    return (
        <div>
             <NavBar/>
            <h2>Products List</h2>
            <ol>
                <li><Link href="/products/product">Product1</Link></li>
                <li><Link href="/products/product">Product2</Link></li>
                <li><Link href="/products/product">Product3</Link></li>
            </ol>
        </div>
    )
}