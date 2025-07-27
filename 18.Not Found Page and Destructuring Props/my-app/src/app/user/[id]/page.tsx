import { notFound } from "next/navigation"

interface IdProps{
    id : string
}
interface MainProp{
    params: IdProps
}

const Id = ({params:{id}}:MainProp)=>{ // "destructuring" for more info go to chatgpt = https://chatgpt.com/c/6714db8f-0268-8004-a243-b5fc554d6a47
    // applying condition to show if if is greater than 10
    if(Number(id) > 10){   
        notFound()
    }
    // console.log(props) 
    // console.log(params)
    // console.log(id)
return <h1 className="text-center text-4xl text-green-600 mt-12">{`User ${id} page`}</h1>
}

export default Id