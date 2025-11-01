import { useRef } from "react";

function UseRefrence() {
    const inputRef = useRef(null);
    const h1Ref = useRef(null);
    const btnRef = useRef(null);
    const inputHandler = () => {
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color = 'blue'
        inputRef.current.style.backgroundColor = 'white'
        inputRef.current.placeholder = "Write your name"
        inputRef.current.value="5775"
    }
    const hideShow = () => {
        
        if (inputRef.current.style.display != 'none') {
            inputRef.current.style.display = 'none'
        } else {
            inputRef.current.style.display = 'inline'
        }
    }
    const styleH1 = () => {
        h1Ref.current.style.color ='blue'
    }
    return (
        <>
            <h1>Using useRef</h1>
            <input ref={inputRef} type="text" placeholder="Write here..." /> <br /><br />
            <button onClick={inputHandler} >Tap to write...</button> <br /><br />
            <button onClick={hideShow}>Hide & Show</button> <br /><br />

            <h1 ref={h1Ref}>I'm H1 from Noida </h1> <button onClick={styleH1}>Tu bole to h1 ka rang badal du</button>
        </>
    )
}

export default UseRefrence;