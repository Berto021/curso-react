import React, { useState } from 'react'

import style from "./MyForm.css"

const MyForm = ({user}) => {
    {/*6-Controlled inputs */}
    {/*4--Controle de dados*/}
      const [name,setName] = useState(user ? user.name :'')
      const [email,setEmail] = useState(user ? user.email: '')
      const [role,setRole] = useState(user ? user.role: '')
      const [bio,setBio] = useState(user ? user.bio: '')
      const handleName = (e) =>{
        console.log(setName(e.target.value))
       
        
      }
      const handleSubmit = (e) =>{
       e.preventDefault()
       console.log('enviando sem estragar tudo')
       console.log(name,email,bio,role)
       
       {/*7--Limpando form */}
       setEmail('')
       setName('')
       setBio('')
       setRole('')
      };
    
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            
            {/*5--Envio de Form */}
            
            {/*1--Criando form */}
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite o nome" onChange={handleName}
            value={name}/>
            

            {/*2--label envolvendo input */}
            <label >
                <span>E-mail</span>
                <input type="email" name='email' placeholder='Digite seu Email' onChange={(e) => setEmail(e.target.value)}
                value={email}/>
                
            </label>
            {/*8--Textarea */}
            <label htmlFor="textarea">
                <span>Text area</span>
                <textarea name="textarea" placeholder='descrição do usuário'value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            </label>
            {/*9--SELECT */}
            <label htmlFor="role">
                <span>Função</span>
                <select name="role" >
                    <option value="Usuário">Usuário</option>
                    <option value="Admininstrador">Admininstrador</option>
                    <option value="Gm">Grand Master</option>
                </select>
            </label>
            <input type="submit" />
        </div>

    </form>

    </div>
  )
}

export default MyForm