import { useEffect, useState } from "react";
import './App.css'
export default function API() {
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        getUsersData();
    },[])

    async function getUsersData(){
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json()
        setUsersData(response.users);
    }
    console.log(usersData);
    
    return (
      <div>
        <h1>Fetch data from the API</h1>
        <h1
          style={{
            padding: "5px",
            color: "red",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          User Information
        </h1>
        <ul className="user-list user-list-header">
          <li>First Name</li>
          <li>Last Name</li>
          <li>Age</li>
          <li>Gender</li>
          <li>Profile Picture</li>
        </ul>
        {usersData &&
          usersData.map((users, index) => (
            <ul className="user-list">
              <li>{users.firstName}</li>
              <li>{users.lastName}</li>
              <li>{users.age}</li>
              <li>{users.gender}</li>
              <img src={users.image} alt="" />
            </ul>
          ))}
      </div>
    );
};