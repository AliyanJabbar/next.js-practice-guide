import Card3, {Card, Card2 } from "../../component/card"
// I can not call it like this Card(). Because it is not a function, it is a component. A component is not called.A component is rendered


// The Component made here(end point) should be export default

const Home=() =>{

  return (
    <div>
      <p>Hello World</p>
      {/* rendering the Card component */}
      <Card/>
      {/* reusing the Card Component */}
      <Card/>
<br />
      {/* using another component(made by arrow function) from the same location */}
      <Card2/>

      {/* using another component(made by name function) from the same location */}
      <Card3/>
    </div>
)
}
export default Home