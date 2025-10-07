function User({name ="New User"}) { // default props if user not passed name then show "Guest User"
    return (
        <div>
            <h1>Hi, {name}</h1>
        </div>
    )
}

export default User;