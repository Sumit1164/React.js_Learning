const LiftingState = ({setUser}) => {

  return (
    <div>
          <h1>Lifting State in react js</h1>
          <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter user name"/><hr />
    </div>
  )
}

export default LiftingState
