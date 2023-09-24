import { useState } from 'react'

import './App.css'
import MyComponents from '../components/MyComponents'
import Title from '../components/Title'
function App() {
  const x = 8

  const [redTitle,setRedTitle]= useState(true)
  

  return (
    <div className='app'>
      {/*CSS global */}
      <h1>React com css</h1>
      <p>parágrafo global</p>
      <MyComponents />
      {/*  Inline css */}
      <p style={{color:'blue',background:'pink'}}>Esse elemento foi estilizado inlinemente</p>

      {/* CSS inline dinamico */}

      <h2 style={x<10 ? ({background:'green',color:'black'}): ({background:'red',color:'gray'})}>OIIIIII</h2>
      <h2 style={x>10 ? ({background:'green',color:'black'}): ({background:'red',color:'gray'})}>OIIIIII</h2>

      {/* Esse aqui vai ter classe dinâmicas */}
      <h2 className={!redTitle ? "red-title" : "title"}>Aqui tem classe dinâmica</h2>
      {/*Css modules */}
      <Title />
    </div>

  )
  }  
     
       
     
   
  


export default App
