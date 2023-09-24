import MenageData from '../components/MenageData'
import ListRender from '../components/ListRender'
import Count from '../components/Count'
import ConditionalRender from '../components/ConditionalRender'
import ConditionalRenderVideo from '../components/ConditionalRenderVideo'
import ShowUserName from '../components/ShowUserName'
import CarDetails from '../components/CarDetails'
import Container from '../components/Container'
import ExecuteFunction from '../components/ExecuteFunction'


import './App.css'
import Amor from "./assets/Amor.jpeg"
import { useState } from 'react'
import Frags from '../components/Frags'
import Message from '../components/Message'
import ChangeMessageState from '../components/ChangeMessageState'
import UserDetails from '../components/UserDetails'

function App() {
  
  const [userName] = useState('Lourdes')

  function showMessage (){
    console.log('EVento do componente dad')
  }

  const cars = [
    {id:1,brand:'Fiat',km:3000,color:'white',newCar:true},
    {id:2,brand:'gol',km:6000,color:'brown',newCar:false},
    {id:3,brand:'ferrari',km:9000,color:'red',newCar:true},

  ];
  const person = [
    {id:1, name:'Humberto',age:19,habilitation:false,job:'Jovem aprendiz'},
    {id:2, name:'Thay',age:22,habilitation:true,job:'garçonete'},
    {id:3, name:'Felipe',age:33,habilitation:true,job:'Mecânico'},
    {id:4, name:'Joaquim',age:2,habilitation:false,job:'bebe'}
  ]
  const [message,setMessage] = useState("")
  const handleMessage = (msg) =>{
    setMessage(msg)
  }
  return(
    <div>
     
      <h1>Olha uma imagem abaixo</h1>
      <div>
        {/*Imagem em public */}
        <img src="/img1.jpg" alt="imagem" />
      </div>
     
      <MenageData />
      <ListRender />
      <Count />
      <ConditionalRender />
      <ConditionalRenderVideo />
      <ShowUserName nome ='Humberto' sobrenome = 'Lima' idade ={19}
      name = {userName}/>
      <CarDetails brand = 'Gol' km={23000} color ='Black'  newCar ={false}/>
      <CarDetails brand = 'Fiat' km={502000} color ='Pink' newCar ={true} /> 
      <CarDetails brand = 'Wolkswagen' km={80000} color ='Black' newCar ={true} /> 
      {cars.map((car) =>(
        <CarDetails
          key={car.id}
          brand = {car.brand}
          km = {car.km}
          color = {car.color}
          newCar = {car.newCar}
          />
      ))}
      <Frags  propFrag = 'Teste'/>
      {/* Childrin */}
      <Container mValue = 'olha o porco '>
        <p>Esse é o conteúdo</p>
      </Container>
      {/*executar function */}
      <ExecuteFunction myFunction = {showMessage}/>
      <Message  msg = {message}/>
      <ChangeMessageState handleMessage = {handleMessage}/>
      {person.map((people) =>(
        <UserDetails 
        key={people.id}
        name={people.name}
        age = {people.age}
        job ={people.job}
        habilitation = {people.habilitation}/>
      ))}
      
      
    </div>
  )
}

export default App
