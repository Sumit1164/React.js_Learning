import { useState } from "react";

export default function AddUserListUI() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const detailsUser = async () => {
    const url = "http://localhost:3000/user";
    console.log(`User name is: ${name} and age is: ${age} email id is: ${email}`);
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ name, age, email })
    });
    response = await response.json();
    if (response) {
      alert("User added successfully✅")
    }
  }
  return (
    <div>
      <h1>Add New User</h1>
      <input onChange={(e)=>setName(e.target.value)} type="text" name="Name" id=""  placeholder="Enter user name"/><br /><br />
      <input onChange={(e)=>setAge(e.target.value)} type="age" name="Age" id="" placeholder="Enter user age"/><br /><br />
      <input onChange={(e)=>setEmail(e.target.value)} type="email" name="Email" id="" placeholder="Enter user email" /><br /><br />
      <button onClick={detailsUser}>Add User</button>
    </div>
  );
}