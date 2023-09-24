import {useState} from "react";



const MenageData = () => {
    const [number,setNumber] = useState(50)
    let someData = 10;
    let newData = 5
  return (
    <div>
        <p>Olha aqui esse número: {someData}</p>
        <button onClick={() =>{ someData = 20

        }}>Mude o numero</button>

        <p>Olha o outro: {number}</p>
        <button onClick={() =>{
            setNumber(500)
        }}> Mudar o state</button>
        

    </div>
    
  )
}

export default MenageData