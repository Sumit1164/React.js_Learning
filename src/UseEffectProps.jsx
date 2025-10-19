import { use } from "react";
import { useEffect } from "react";

const UseEffectProps = ({cnt, dta}) => {
    // const handleCounter = () => {
    //     console.log("handle counter called");
    // }
    // useEffect(() => {
    //     handleCounter();
    // },[])
    useEffect(() => {
        console.log("mounting phase only"); 
    }, [])
    useEffect(() => {
        console.log("update phase only");
    }, [cnt])
    useEffect(() => {
        return () => {
            console.log("unmounting phase only");
            
        }
    }, [])
    return (
        <div>
            <h1>Use props to handle side effect</h1>
            <h1>Counter Component {cnt}</h1>
            <h1>InCounter Component { dta}</h1>
        </div>
    )
 }


export default UseEffectProps;