import { useState } from "react";

// function User() {
//     return (
//         <>
//             <h1>Sumit S7T</h1>
//         </>
//     )
// }



function MultipleCondition() {
    const [count, setCount] = useState(-1);
    return (
        <>
            {/* <h1>Multiple Condition in React JS: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter</button> */}
            {
                count == 0 ? <h1>I'm Zero</h1>
                : count == 1 ? <h1></h1>
                :count == 2 ?<h1></h1>
                : count == 3 ? <h1>I'm third</h1>
                :count == 4 ?<h1></h1>
                : count == 5 ? <h1>I'm Five</h1>
                :count == 6 ?<h1></h1>
                : count == 7 ? <h1>I'm Seven</h1>
                :count == 8 ?<h1></h1>
                : count == 9 ? <h1>I'm Nine</h1>
                :count == 10 ?<h1></h1>
                : count == 11 ? <h1>I'm Elaven</h1>
                : null
                // < h1 > I'm Uncountable</>
            }
        </>
    )
}
export default MultipleCondition;