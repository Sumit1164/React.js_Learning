import { useState } from "react";

function UpdatingObject() {
    const [data, setData] = useState({
        name: 'Sumit',
        address: {
            country: "India",
            city:'Noida'
        }
    })
    const handleName = (val) => {
        setName('Sumit Tripathi')
    }
    return (
        <div>
            <h1>Updating Object in State in React js</h1>
            <input type="text" placeholder="Update Name" onChange={(event)=>handleName(event.target.value)} />
            <h2>Name: { data.name}</h2>
            <h2>City: { data.address.city}</h2>
            <h2>Country: { data.address.country}</h2>
        </div>
    )
}
export default UpdatingObject;