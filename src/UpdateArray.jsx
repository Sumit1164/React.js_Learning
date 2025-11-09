import { useState } from "react";

const UpdateArray = () => {
  const [data, setData] = useState([
    'sumit', 'kashish', 'shubh'
  ])
  const handleUser = (name) => {
    data[data.length - 1] = name
    setData([...data])
  }

  // Array object
  const [userData, setUserData] = useState([
    { name: 'sumit', age:'21'},
    { name: 'kashish', age:'19'},
    { name: 'peter', age:'22'}
  ])
  const handleAge=(age)=>{
    userData[userData.length - 1].age= age
    setUserData([...userData])
  }
  return (
    <div>
      <h1>Updating Array in state</h1>
      <input type="text" placeholder="Update last user" onChange={(e)=>handleUser(e.target.value)}/>
      {
        data.map((item, index) => (
          <h3 key={index}>{ item}</h3>
        ))
      }
      <hr />
      <input type="text" placeholder="Update last user age" onChange={(e) => handleAge(e.target.value)} />
      {
        userData.map((item, index) => (
          <h3 key={index}>{item.name},{ item.age}</h3>
        ))
      }
    </div>
  )
}

export default UpdateArray;