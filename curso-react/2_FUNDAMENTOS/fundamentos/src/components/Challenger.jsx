const Challenger = () =>{
    const numero1 = 30
    const numero2 = 10
   

    return(
        <div>
            <p> olha o {numero1}</p>
            <p> olha o {numero2}</p>
            <button onClick={() => console.log(numero1+numero2)}>Clique e veja a mágica</button>
        </div>
    )
}
export default Challenger