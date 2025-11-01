import { useRef, useState } from "react";

const UnControlledComponent = () => {
    const userRef = useRef(null)
    const passRef = useRef(null)

    // Step 1: State to track background color
    const [bgColor, setBgColor] = useState("white");

    // Step 2: Function to handle submit
    const handleSubmit = () => {
      setBgColor("lightblue"); // Change background color
    };

    const handleForm = (event) => {
        event.preventDefault(); // Do not reload full website
        let user = document.querySelector("#user").value;
        let pass = document.querySelector("#pass").value;
        console.log(`user name ${user}, password ${pass}`);
    }

    const handleFormRef = (event) => {
        event.preventDefault()
        const user = userRef.current.value
        const pass = passRef.current.value
        console.log(`user name ${user}, password ${pass}`)
    }

    return (
        <div style={{backgroundColor: bgColor}}>
            <h1>UnControlled Componnent</h1> <br /><br />
            <h2>Login Your Identity</h2>
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="Enter your name" required/>
                <br /><br />
                <input type="password" id="pass" placeholder="Enter your password" required/>
                <br /><br />
                <button type="button" onClick={handleSubmit} style={{backgroundColor: "green",color: "white",border: "none", padding: "10px 20px", cursor: "pointer"}}>Submit</button>
            </form>

            <br /><hr style={{ color: "red", height: '5px' }} /> <br />
            <h1>UnControlled Componnent with useRef</h1> <br /><br />
            <h1>Sign up</h1>
            <form action="" method="post" onSubmit={handleFormRef}>
                <input type="text" ref={userRef} id="userRef" placeholder="Username" />
                <br /><br />
                <input type="password" ref={passRef} id="passRef" placeholder="Password" />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UnControlledComponent;