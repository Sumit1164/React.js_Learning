import { useTransition } from "react";

function UseTransitionsReact() {
    const [pending, setTransition] = useTransition();
    const handleBtn=() => {
        setTransition(async () => {
            await new Promise(res=>setTimeout(res, 3000))
        })
    }
    return (
        <div>
            <h1>Use Transition Hook in React js</h1>
            {
                pending?<img style={{ width: "100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
            }
            <button disabled={pending} onClick={handleBtn}>Submit</button>
        </div>
    )
}
export default UseTransitionsReact;