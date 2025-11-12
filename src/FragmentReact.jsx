import { Fragment } from "react"
export default function FragmentReact() {
  return (
    <Fragment>
          <h1>Fragment in react js</h1>
          <h4>Freagment use to remove extra element from component</h4>
          
      <Data />
      <Checks />
      <Checks />
      <Checks />
    </Fragment>
  )
}


function Data() {
    return (
        <>
            <h1>Use only angular bracket is called fragment also we can write in the angular bracket "Fragment" </h1>
        </>
    )
}

function Checks() {
  return (
    <>{/* write div in angular bracket then hii show in multiple line then we use fragment to resolve the error   */}
      <span>Hii </span>
    </>
  )
}