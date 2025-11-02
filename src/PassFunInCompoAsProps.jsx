function PassFunInCompoAsProps({displayName, name, onUser}) {
    // const displayName = (name) => {          // this write in App.jsx for follow h1 condition
    //     alert(name)
    // }
    return (
        <div>
            {/* <h1>Call Parent component Function to child component</h1> */}
            <button onClick={() => displayName(name)}>Display User</button>
            <button onClick={()=>onUser()}>Getting...</button>
        </div>
    )
}
export default PassFunInCompoAsProps;