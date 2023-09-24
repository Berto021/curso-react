import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
  const arrayMsg = ['oi','Ola','OIIIII','Vasco']  
  return (
    <div>
        <button onClick={() => handleMessage(arrayMsg[0])}> 1 </button>
        <button onClick={() => handleMessage(arrayMsg[1])}> 2 </button>
        <button onClick={() => handleMessage(arrayMsg[2])}> 3 </button>
        <button onClick={() => handleMessage(arrayMsg[3])}> 4 </button>
        
    </div>
  )
}

export default ChangeMessageState