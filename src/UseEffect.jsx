import { useEffect, useState } from "react";

function UseEffect() {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState(0);
    useEffect(() => {
        // callOnce();
        callDataOnly();
    }, [data])
    function callDataOnly() {
        console.log("callDataOnly");
        
    }
    function callOnce() {
        console.log("callOnce function called");
    }
    return (
        <div>
            <h1>Using useEffect</h1>
            <button onClick={() => setCounter(counter + 1)}>Count:  {counter}</button>
            <button onClick={()=>setData(data+1)}>Data:  {data}</button>
            
        </div>
    )
}
export default UseEffect;