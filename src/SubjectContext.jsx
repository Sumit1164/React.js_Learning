import { useContext } from "react"
import StudentContext from "./StudentContext"
import { SubjectContexts } from "./ContextData"

export default  function SubjectContext() {
  const subject = useContext(SubjectContexts)
  return (
    <div style={{backgroundColor:'gray', padding:'15px'}}>
      <h1>Subject is: { subject}</h1>
    </div>
  )
}
