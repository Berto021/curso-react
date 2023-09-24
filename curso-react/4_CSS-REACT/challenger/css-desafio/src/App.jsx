import { useState } from 'react'
import CarDetails from '../components/CarDetails';

import './App.css'


function App() {
  const cars = [
    {id:1,brand:'Fiat',km:3000,color:'white',newCar:true},
    {id:2,brand:'gol',km:6000,color:'brown',newCar:false},
    {id:3,brand:'ferrari',km:9000,color:'red',newCar:true},

  ];

  return (
    <>
      <div className='central_div'> 
        <h1 style={{background:'black',color:'gold',}}>Apresentando Carros</h1>
        {cars.map((car) =>(
        <CarDetails
        id ={car.id}
        brand ={car.brand}
        km = {car.km}
        color = {car.color}
        newCar = {car.newCar}
        />
      ))}
      </div>
      
        
    </>
  )
}

export default App
