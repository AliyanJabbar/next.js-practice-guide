export default async function product({params}:{params:{product:"string"}}){//using destructuring in props
// props is an object which caries a key of product(name of our folder) than the value of it will be the route we provide after products. Like here localhost:3000/products/Clothes, Clothes will be the value

let fetchedData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)//for data search jsonplaceholder
let res = await fetchedData.json()
   return (
      <div>
    <h2> Product Details:</h2>
         <h3>{`Title: ${res.title}`}</h3>
         <h3>{`ID: ${res.id}`}</h3>
         <h3>{`Description: ${res.body}`}</h3>
    </div>
 )   
}

// we have given the name of folder(product) in a square bracket so that we can use it with any name after products/ in search bar npm run dev like milk or yogurt or any id like 123 or anyother we want