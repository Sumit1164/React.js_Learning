import { useEffect, useState } from "react";
import './App.css'
import { useNavigate } from "react-router";
export default function UserListsUI(){
    // Create LOader 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const url = "http://localhost:3000/user";
  const [userData, setUserData] = useState([]);
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])
    const getUserData = async() => {
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        setUserData(res);
        setLoading(false);
  }
  
  const deleteUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method:'delete'
    })
    response = await response.json();
    if (response) {
      alert("User deleted successfully💀")
      // after delete need to refrece to show actual data so i want to do not refrece always, automatic refresh-> call the function
      getUserData()
    }
  }

  const updateUser = async (id) => {
    navigate("/update/"+id)
  }
  return (
    <div>
      <ul className="user-list user-list-header">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Action</li>
      </ul>
      {!loading ? (
        userData.map((user) => (
          <ul key={user.name} className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li>
              <button className="btnx" onClick={(e) => deleteUser(user.id)}>Delete</button>
              <button className="btnx" onClick={(e) => updateUser(user.id)}>Update</button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data Loading...</h1>
      )}
    </div>
  );
}