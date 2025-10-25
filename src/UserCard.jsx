import { useState } from "react";

function UserCard() {
    const [cardStyle, setCardStyle] =useState({
        border: '2px solid black',
        width: '200px',
        boxShadow: '1px 1px 1px 1px #464545ff',
        margin: '20px',
        padding: '20px'
    })
    const [textColor, setTextColor] = useState('white')

    const updateTheme = (bgColor, textColor) => {
        setCardStyle({ ...cardStyle, backgroundColor: bgColor })
        setTextColor(textColor)
    }

    const [grid, setGrid] = useState(true)
    // const cardStyle = {
    //     border: '2px solid black',
    //     width: '200px',
    //     boxShadow: '1px 1px 1px 1px #464545ff',
    //     margin: '20px',
    //     padding: '20px'
    // }
    return (
        <>
            <h1>Users Profiles</h1>
            <h1 style={{ backgroundColor: "green" }}>Dynamic and Conditional Inline Style</h1>
            <button onClick={()=>updateTheme('#5775', 'red')}>Gray Theme</button>
            <button onClick={() => updateTheme('black', 'white')}>Default Theme</button>
            <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
            <div style={{display: grid?'flex':'block', flexWrap:'wrap'}}>
                <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" srcSet="" />
                <div style={{color:textColor}}>
                    <h4>Sumit Tripathi</h4>
                    <p>Software Engineer</p>
                </div>  
            </div>
            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" srcSet="" />
                <div style={{color:textColor}}>
                    <h4>Kashish Tripathi</h4>
                    <p>Software Engineer</p>
                </div>  
            </div>
            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" srcSet="" />
                <div style={{color:textColor}}>
                    <h4>Amit Tripathi</h4>
                    <p>Software Developer</p>
                </div>  
            </div>
            </div>
        </>
    )
}
export default UserCard;