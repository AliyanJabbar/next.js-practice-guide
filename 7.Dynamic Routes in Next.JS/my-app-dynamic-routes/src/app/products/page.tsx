import Link from "next/link";

export default async function product() {
  let fetchedData = await fetch("https://jsonplaceholder.typicode.com/posts")//for data search jsonplaceholder
  let res = await fetchedData.json()
  return (
    <div>
      <h3>Products List</h3>
      <ol>
        {
          res.map((item:any)=>{
            return (
              <li><Link href={`products/${item.id}`}>{item.title}</Link></li>
            )
          })
        }
      </ol>
    </div>
  );
}
