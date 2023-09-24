

const CarDetails = ({id,brand,km,color,newCar}) => {
  return (
    <div>
        <ul>
            <li className="brand_car">Marca: {brand}</li>
            <li>Rodagem: {km}km</li>
            <li>Color: {color}</li>
            <li>{newCar ? "Esse carro é novo": "Esse carro é usado"}</li>
        </ul>
    </div>
  )
}

export default CarDetails