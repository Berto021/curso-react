import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Humberto','Joyce','Lourdes','Helena','Anderson'])
    const [users,setUsers] = useState([
        {id:1,name:'Humberto',age:19},
        {id:2,name:'Lima',age:14},
        {id:3,name:'Juanzino',age:50},
        {id:4,name:'Messi',age:32},

    ])
    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) =>{
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
        
    }

  return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}> {item }</li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
                <li key={user.id}> {user.name} -- {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom} >delete</button>
    </div>
  )
}

export default ListRender