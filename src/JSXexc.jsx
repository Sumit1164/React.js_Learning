import { use } from "react";

function JSXex() {
    const name = 'SUMIT'
    const userObj ={
        name: "Sumit",
        email: "sumit7t@gmail.com",
        age : 21
    }

    let path = "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"

    const userArry = ["Sumit", "Kashish", "Spider", "Liz"]

    let x = 57, y = 75;

    function frt() {
        return "BANANA🍌"
    }

    function sum(a, b) {
        return a + b;
    }

    function operation(a, b, oper) {
        if (oper == "+") {
            return a + b;
        }
        else if (oper == "-") {
            return a - b;
        }
        else {
            return a * b;
        }
    }

    return (
        <div>
            <h1>My name is {name ? name : "User not found!"}</h1>
            <h4>{x + y}    {x * y}</h4>
            <h1>{frt()}</h1>
            <h1>{sum(5, 7)}</h1>
            <h2>{operation(8, 7, "+")}</h2>
            <h1>{userObj.email}</h1>
            <h2>{userArry[0]}</h2>
            <img src={path} />
            <input type="text" value={name} id={name} />
        </div>
    )
}
export default JSXex;