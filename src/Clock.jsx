import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState()
    useEffect(() => {
        setInterval(() => {
            // setTime(new Date().toLocaleDateString());
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    },[])
    return (
        <div>
            <h1
                style={{backgroundColor:"white", color:color, margin:"20px", width:"450px", borderRadius:'5px'}}
            >Clock {time}</h1>
        </div>
    )
}
export default Clock;