import styled from "styled-components";
const UseStyledComponent = () => {

    // const Heading = styled.h1`
    // color:red;
    // border:2px solid pink;
    // border-radius: 50px;
    // padding:2px 2px;
    // margin:2px;
    // `

    // use this style like object create

    const Heading = styled.h1({
    color:'red',
    border:'2px solid pink',
    borderRadius: '50px',
    padding:'2px 2px',
    margin:'2px'
    })

    const Btn = styled.button`
    color:green;
    background:white;
    text-decoration: underline;
    width:140px;
    height:40px;
    margin:20px;
    `

    return (
        <div>
            <h1>Using Styled Component</h1>
            <Heading>I'm a Styled Component</Heading>
            <br /><br />

            <Btn>Login</Btn>
        </div>
    )
}

export default UseStyledComponent;