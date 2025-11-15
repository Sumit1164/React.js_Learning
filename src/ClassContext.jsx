import StudentContext from "./StudentContext"

export default function ClassContext() {
  return (
    <div style={{backgroundColor:'skyblue', padding:'15px'}}>
          <h1>Class Component</h1>
          <StudentContext />
    </div>
  )
}