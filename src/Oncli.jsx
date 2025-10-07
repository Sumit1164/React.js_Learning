function Oncli() {
    function CalFunc() {
        alert("Function call")
    }
    const frt= () => {
        alert("Apple")
    }
    const frts= (name) => {
        alert(name)
    }

    return (
        <div>
            <h1>click events</h1>
            <button onClick={frt}>click me</button>
            <button onClick={() => frts("Banana")}>click me</button>
            <button onClick={()=>frts("Watermellon")}>click me</button>
        </div>
    )
}

export default Oncli;