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
        data.name = val
        setData({...data})

        // let tempData = data
        // tempData.name = val
        // setData({...tempData})
    }
    const handleCity=(val) => {
        data.address.city = val
        setData({...data, address:{...data.address, val}})
    }
    return (
        <div>
            <h1>Updating Object in State in React js</h1>
            <input type="text" placeholder="Update Name" onChange={(event)=>handleName(event.target.value)} />
            <input type="text" placeholder="Update City" onChange={(event)=>handleCity(event.target.value)} />
            <h2>Name: { data.name}</h2>
            <h2>City: { data.address.city}</h2>
            <h2>Country: { data.address.country}</h2>
        </div>
    )
}
export default UpdatingObject;