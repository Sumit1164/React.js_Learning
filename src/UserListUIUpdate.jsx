import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserListUIUpdate() {
    const { id } = useParams();
    // console.log(id);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const url = "http://localhost:3000/user/" + id;

    const navigate = useNavigate(); // use krte hai jab user update button pe tap kare uske baad home page pe aa jaye

    useEffect(() => {
        getUserData();
    },[])
    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
    }
    const updateUserData =async () => {
        console.log(name, age, email);
        let response = await fetch(url, {
            method: 'Put',
            body:JSON.stringify({name, age, email})
        })
        response = await response.json()
        if (response) {
            alert("User updated successful😒")
            navigate('/')
        }
    }
    return (
        <div>
            <h1>Update user information</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter user name" />
            <br /><br />
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter user age" />
            <br /><br />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter user email" />
            <br /><br />
            <button onClick={updateUserData} style={{background:"green", color:"white", height:'30px', border:"2px solid black"}}>Update User!</button>
        </div>
    )
}
export default UserListUIUpdate;



//? Javascript+SWC means hota hai JavaScript Speedy Web Compiler