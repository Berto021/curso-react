import { useState } from "react"

const ConditionalRender = () => {
    const change = () =>{
        if(x){
            setX(false)
        }else if(x=== false){
            setX(true)
        }
    }
    const [x,setX] = useState(true)
    const ifConditional = ()=>{
        if(x){
            return  "O One piece é real"
        }else{
            return  "O One piece é falso"
            
        }
    }
  return (
    <div>
        <h1>
            {ifConditional()}
        </h1>
        <button onClick={change}>change</button>
    </div>
  )
}

export default ConditionalRender