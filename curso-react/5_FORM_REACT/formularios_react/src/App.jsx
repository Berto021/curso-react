import { useState } from 'react'
import MyForm from '../components/MyForm'

import './App.css'

function App() {
 
  
  return (
    <>
      <div>
        <h1>Formulários</h1>
        <MyForm user ={{name:"josias",email:"Josias@gmail.com",bio:"Eu sou um mestre pokemon",role:"Usuário"}}/>

      </div>
    </>
  )
}

export default App
