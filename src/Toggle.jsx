import { useState } from "react";
import Counter from "./Counter";
import User from "./Component";
function Apps() {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <h1>Toggle in React JS</h1>

            
            {
                display?<h1>Sumit Tripathi</h1>:null    // we can use a component to show name 
            }
           

            <button onClick={() => setDisplay(!display)}>Hide and show</button>
            
            {
                display?<User />:null  // use component to hide and show 
            }
            
        
        </>
    )
}
export default Apps;