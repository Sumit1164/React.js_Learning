import useCustomeHook from "./useCustomeHook"

const CustomHooks = () => {
    const [value, setValue] = useCustomeHook(true);
    const [data, setData] = useCustomeHook(true);
  return (
      <div>
          <h4>Use these button to manipulate Heading</h4>
          <button onClick={setValue}>Toggle Me!</button>
          <button onClick={()=>setValue(false)}>Hide Me!</button>
          <button onClick={()=>setValue(true)}>Show Me!</button>
          {
              value? <h1>Custom Hooks in react js</h1>:null
          }

          <hr />
          <button onClick={setData}>Hide & Show</button>
          <button onClick={()=>setData(false)}>Hide</button>
          <button onClick={()=>setData(true)}>Show</button>
          {
              data ? <h1>User Data published on internet</h1> : null
          }

    </div>
  )
}

export default CustomHooks
