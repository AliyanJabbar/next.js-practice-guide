//Static page ki example Blog website hai kiunke us ke andar ka data bohot kam change hoga. This is a static page as the data present here will change hardly(means almost not change)
//Dynamic page ki example ecommerce website hai. Dynamic page on request(click krne par) server pe generate hota hai or humare samne render ho jata hai or jo bhi update data pada hota hai woh hume show kr deta hai. Jbke static page ko humen revalidate karna padta hai 

export default async function product({params}:{params:{product:"string"}}){//using destructuring in props
// props is an object which caries a key of product(name of our folder) than the value of it will be the route we provide after products. Like here localhost:3000/products/Clothes, Clothes will be the value

let fetchedData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`,
   {next:{revalidate:3000}} //for static page //handling static page now it will revalidate or refresh after 3sec
   // {cache:"no-store"} //for dynamic page
) 
   
//for data search jsonplaceholder
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

// we have given the name of folder(product) in a square bracket so that we can use it with any name after products/ in search bar npm run delike milk or yogurt or any id like 123 or anyother we want