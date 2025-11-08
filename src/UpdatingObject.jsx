import { useState } from "react";

function UpdatingObject() {
    const [data, setData] = useState({
        name: 'Sumit',
        address: {
            country: "India",
            city:'Noida'
        }
    })
    const handleName = () => {
        setName('Sumit Tripathi')
    }
    return (
        <div>
            <h1>Updating Object in State in React js</h1>
            <h2>{name}</h2>
            <button onClick={handleName}>Update name</button>
        </div>
    )
}
export default UpdatingObject;