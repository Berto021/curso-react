

const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é {props.nome} de {props.sobrenome}
         e sua idade é  <br />{props.idade} anos {props.name}
        </h2>
        
    </div>
  )
}

export default ShowUserName