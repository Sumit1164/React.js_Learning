function UserCard() {
    const cardStyle = {
        border:'2px solid black', width:'200px', boxShadow:'1px 1px 1px 1px #464545ff', margin:'20px', padding:'20px'
    }
    return (
        <>
            <h1>Users Profiles</h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" srcset="" />
                <div>
                    <h4>Sumit Tripathi</h4>
                    <p>Software Engineer</p>
                </div>  
            </div>
            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" srcset="" />
                <div>
                    <h4>Kashish Tripathi</h4>
                    <p>Software Engineer</p>
                </div>  
            </div>
            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-701751694974843ybexneueic.png" alt="" srcset="" />
                <div>
                    <h4>Amit Tripathi</h4>
                    <p>Software Developer</p>
                </div>  
            </div>
            </div>
        </>
    )
}
export default UserCard;