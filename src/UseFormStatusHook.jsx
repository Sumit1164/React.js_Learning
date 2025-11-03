import { useFormStatus } from "react-dom";

const UseFormStatusHook = () => {
    const handleSubmit = async ()=> {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submit");
    }
    function HandleFormm() {
        const { pending} = useFormStatus();
        return (
            <div>
                <input type="text" placeholder="User name"/><br /><br />
                <input type="email" placeholder="User mail"/><br /><br />
                <input type="password" placeholder="User password" /><br /><br />
                <button disabled={pending}>{pending?'Submitting...': 'Submit'}</button>
            </div>
        )
    }
    return (
        <div style={{ width: 620, height: 300, border: "3px sloid black", background: "pink", color: "black", borderRadius: 15, margin: 20, padding:7}}>
            <h1>Use Form Status Hook in react js</h1>
            <form action={handleSubmit}>
                <HandleFormm />
            </form>
        </div>
    )
}
export default UseFormStatusHook;