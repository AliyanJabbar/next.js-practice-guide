import Card from "../../component/card"
// I can not call it like this Card(). Because it is not a function, it is a component. A component is not called.A component is rendered
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* rendering the Card component */}
      <Card/>
      {/* reusing the Card Component */}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
)
}
