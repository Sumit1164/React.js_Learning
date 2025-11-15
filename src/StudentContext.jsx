import { SubjectContexts } from "./ContextData"
import SubjectContext from "./SubjectContext"

export default function StudentContext() {
  return (
    <div style={{backgroundColor:'green', padding:'15px'}}>
          <h1>Student Component</h1>
          <SubjectContext />
    </div>
  )
}
