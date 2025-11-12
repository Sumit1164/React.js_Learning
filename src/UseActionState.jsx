import { useActionState } from "react"

const UseActionState = () => {

  const handleSubmit =async (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise(res=>setTimeout(res, 2000))
    // console.log("Handle Submit Called", name, password);
    if (name && password) {
      return {message:'Data Submitted', name, password}
    } else {
      return{error:'Failed to Submit', name, password}
    }
    
  }
  const [data, action, pending] = useActionState(handleSubmit, undefined)
  console.log(data)
  return (
    <div>
      <h1>Use Action State Hook in React js</h1>
      <form action={action}>
        <input defaultValue={ data?.name} type="text" placeholder="Enter name" name="name"/><br /><br />
        <input defaultValue={ data?.password} type="password" placeholder="Enter password" name="password" /><br /><br />
        <button disabled={pending}>Submit🚀</button><br /><br />
        {
          data?.error && <span style={{color:'red'}}>{ data?.error}</span>
        }
        {
          data?.message && <span style={{color:'green'}}>{ data?.message}</span>
        }
      </form>
      <h3>Name: { data?.name}</h3>
      <h3>Password: { data?.password}</h3>
    </div>
  )
}

export default UseActionState
