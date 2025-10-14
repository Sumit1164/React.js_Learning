import { useState } from "react";

function CheckBoxes() {
    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked) {
            setSkills([...skills, event.target.value]);
        }else {
            setSkills([...skills.filter((skill) => skill != event.target.value)]);
        }
    }
    return (
        <div>
            <h2>Select your Skills</h2>
            <input onChange={handleSkills} type="checkbox" id="html" value="HTML" />
            <label htmlFor="html">HTML</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="css" value="CSS" />
            <label htmlFor="css">CSS</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="javascript" value="JavaScript" />
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="react" value="React.js" />
            <label htmlFor="react">React.js</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" id="node" value="Node.js" />
            <label htmlFor="node">Node.js</label>

            <h2>{ skills.toString() }</h2>
        </div>
    )
}
export default CheckBoxes;