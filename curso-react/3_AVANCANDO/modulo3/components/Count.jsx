import { useState } from "react"

const Count = () => {
    let count = 0
    const add = () =>{
        setCounte(counte +1)
        console.log(counte)
    }
    const reset = () =>{
      setCounte(counte * 0)
    }
    const [counte, setCounte] = useState(0)
    const [inputValue,setInputValue] = useState('Humberto')
    const changeInput = (event) =>{
        if(event.target.value.length ===0){
          return setInputValue('Digita algo, velho')
        }
        setInputValue(event.target.value)
    }
  return (
    <div>
        <h2> {counte}</h2>
        <button onClick={add}>Adicione</button>
        <button onClick={reset}>Resetar</button>
        <h3> {inputValue}</h3>
        <input type="text" onChange={changeInput}/>
        </div>
  )
}

export default Count