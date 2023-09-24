import { useState } from "react"


const ConditionalRenderVideo = () => {
    const [x] = useState(true)

    const [name] = useState("Humberto")
  return (
    
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X for true, sim</p>}
        {!x && <p>Agora X é falso</p>}
        <h1>Agora o if ternário</h1>

        {name === "Humberto" ? (
            <div> 
                <p>O nome é Humberto</p>
            </div>
        ): (
            <div> 
                <p>O nome não foi encontrado</p>
            </div>
        )}

    </div>
  )
}

export default ConditionalRenderVideo