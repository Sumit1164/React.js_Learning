import { useState } from "react";

function RadioDropdown() {
    const [gender, setGender] = useState('male');
    const [city, setCity] = useState('Greater Noida');
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
            <h3>Select City</h3>
            <select onChange={(event) => setCity(event.target.value)} defaultValue={'Greater Noida'}>
                <option value="noida">Noida</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="delhi">Delhi</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="bangalore">Bangalore</option>
            </select>
            <h2>Selected City: { city}</h2>
        </div>
    )
}
export default RadioDropdown;