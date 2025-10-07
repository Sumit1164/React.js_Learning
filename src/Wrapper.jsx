function Wrapper({children, color ="red"}) { 
    return (
        <div style={{color:color, background: 'yellow', border: '5px solid green', margin: '10px', width:'auto'}}>
            {/* <h1>Hi Everyone </h1> */}
            {children}
        </div>
    )
}

export default Wrapper;