function Us({user}) {
    
    return (
        <div>
            <hr />
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: { user.email}</h2>
        </div>
    )
}

export default Us;
// Props use to 1st component se 2nd component me data pass krne ke liye 