import { useState } from "react";

function RadioDropdown() {
    const [gender, setGender] = useState('male');
    return (
        <div>
            <h2>This is Radio Dropdown Component</h2>
            <h4>Select your gender:</h4>
            <input type="radio" name="gender" id="male" value="male" onChange={(event) => setGender(event.target.value)} checked={ gender=='male'} /> 
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" onChange={(event)=>setGender(event.target.value)} checked={ gender=='female'}/>
            <label htmlFor="female"> Female</label>
            <h2>Selected Gender: { gender}</h2>
            <br />
            <br />

        </div>
    )
}
export default RadioDropdown;