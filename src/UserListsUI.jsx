import { useEffect, useState } from "react";
import './App.css'
export default function UserListsUI(){
    // Create LOader 
    const [loading, setLoading] = useState(false); 

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])
    const getUserData = async() => {
        const url = "http://localhost:3000/user";
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        setUserData(res);
        setLoading(false);
    }
  return (
    <div>
      <ul className="user-list user-list-header">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>
      {!loading ? (
        userData.map((user) => (
          <ul key={user.name} className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>
        ))
      ) : (
        <h1>Data Loading...</h1>
      )}
    </div>
  );
}