// Components:
// Components ke name ka first letter capital hona chahiye
// Component aik function hai
// Component html ka parent element return krta hai
// Component reusable hai
// Component me javascript/typescript ke andr html & Css bhi likh sakte hai
// Component me html ke andr javascript/typescript bhi likh sakte hai

// Creating a component:

const Card = () => {
   let a = "Component"
  return (
   // using html inside javascript/typescript
    <div>
      {/* using javascript/typescript inside html */}
      <h1>My First {a}</h1>
    </div>
  );
};
export default Card;
