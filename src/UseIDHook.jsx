import { useId } from "react"
const UseIDHook = () => {
    // const name = useId()
    // const pass= useId()
    // const skill = useId()
    // const terms = useId()
    const user = useId()
  return (
    <div>
          <h1>UseID Hook in react js</h1>
          <h4>"useId" is a React Hook for generating unique IDs that can be passed to accessibility attributes.</h4>
          <h2>{ user+'name' }</h2>
          <h2>{user +'pass'}</h2>
          <br /><br />
          <form action="">
              <label htmlFor={user+"name"}>Enter your Information </label>
              <input type="text" placeholder="Enter your Name" id={user+"name"} /><br /><br />
              <label htmlFor={user+'pass'}>Chup Chaap Fill kar😡 </label>
              <input type="text" placeholder="Enter your Password" id={user+'pass'} /><br /><br />
              <label htmlFor={user+'skill'}>Enter your Skills </label>
              <input type="text" placeholder="Enter Skills" id={user+'skill'} /><br /><br />
              <input type='checkbox' placeholder="Enter your Education" id={user+'terms'} />
              <label htmlFor={user+'terms'}>Terms and Condition </label>
          </form>
    </div>
  )
}

export default UseIDHook
