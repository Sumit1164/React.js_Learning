import { useState } from "react";

function DerivedState() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');
    const handleAddUsers = () => {
        setUsers([...users, user])
    }

    const total = users.length
    const last = users[users.length-1]
    const unique = [...new Set(users)].length
    return (
        <div>
            <br />
            <h1>Derived State in react js</h1><br />
            <h2>Total User: { total} </h2>
            <h2>Last User: {last} </h2>
            <h2>Unique Total User: {unique} </h2>
            <br />
            <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="add new user" />
            <br /><br /><button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item, index)=>(
                    <h4 key={index}> { item } </h4>
                ))
            }
        </div>
    )
}
export default DerivedState;