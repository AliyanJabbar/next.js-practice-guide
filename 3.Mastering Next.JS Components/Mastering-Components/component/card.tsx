// Components:
// Components ke name ka first letter capital hona chahiye
// Component aik function hai
// Component html ka parent element return krta hai
// Component reusable hai
// Component me javascript/typescript ke andr html & Css bhi likh sakte hai
// Component me html ke andr javascript/typescript bhi likh sakte hai

// Creating a component:

export const Card = () => {
   let a = "Component"
  return (
   // using html inside javascript/typescript
    <div>
      {/* using javascript/typescript inside html */}
      <h1>My First {a}</h1>
    </div>
  );
};

// making another arrow function
export const Card2 = () => {
  return <p>Mastering Components</p>
};


// making a name function 

export default function Card3 (){
  return <p>With Name Function & Arrow Function</p>
}