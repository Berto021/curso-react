

const UserDetails = ({name,id,habilitation,job,age}) => {
    
  return (
    <div>
        <h3>Informações sobre os candidatos</h3>
        <ul>
            <li>nome:{name}</li>
            <li>trabalho: {job}</li>
            <li>Idade: {age}</li>
            <li>Habilitação:{habilitation? "Está habilitado":"Não tem Habilitação"}</li>
            <p>{age >=18? 'Está apto a continuar no processo':'É menor de idade, está desclassificado'}</p>
        </ul>

    </div>
  )
}

export default UserDetails