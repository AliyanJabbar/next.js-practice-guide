import Link from "next/link";

export default function product() {
  return (
    <div>
      <h3>Products List</h3>
      <ol>
        <li><Link href="/products/product">Product</Link></li>
        <li><Link href="/products/product">Product</Link></li>
        <li><Link href="/products/product">Product</Link></li>
      </ol>
    </div>
  );
}
