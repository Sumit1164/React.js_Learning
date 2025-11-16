// import Header from "./Header"
// import { Login } from "./UserComponent"
// import JSXex from "./JSXexc"
// import Oncli from "./Oncli"
import { useRef, useState } from "react"
// import UpdateArray from "./UpdateArray"
// import UseActionState from "./UseActionState"
// import UseIDHook from "./UseIDHook"
// import FragmentReact from "./FragmentReact"
// import CustomHooks from "./CustomHooks"
// import CollegeContext from "./CollegeContext"
// import { SubjectContexts } from "./ContextData"
import ReactRoute from "./ReactRoute"
import AppRoute from "./AppRoute";
// import CheckBoxes from "./CheckBoxes";
// import Counter from "./Counter"
// import Apps from "./Toggle"
// import MultipleCondition from "./Component"
// import Us from "./Props_"
// import College from "./College"
// import Student from "./Student"
// import User from "./User"
// import Wrapper from "./Wrapper"
// import RadioDropdown from "./RadioDropdown"
// import LoopWithMap from "./LoopWithMap";
// import ReuseComponentInLoop from "./ReuseComponentInLoop";
// import Clock from "./Clock";
// import NestedLoop from "./NestedLoop";
// import UseEffect from "./UseEffect";
// import UseEffectProps from "./UseEffectProps";
// import UserCard from "./UserCard";
// import Style from "./Style";
// import CssModule from "./CssModule";
// import UseStyledComponent from "./UseStyledComponent";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import UseBootstrap from "./UseBootstrap";
// import UseRefrence from "./UseRefrence";
// import UnControlledComponent from "./UnControlledComponent";
// import PassFunInCompoAsProps from "./PassFunInCompoAsProps";
// import ForwardRefs from "./ForwardRefs";
// import UseFormStatusHook from "./UseFormStatusHook";
// import UseTransitionsReact from "./UseTransitionsReact";
// import ComponentPureInReact from "./ComponentPureInReact";
// import DerivedState from "./DerivedState";
// import LiftingState from "./LiftingState";
// import LiftingStates from "./LiftingStates";
// import UpdatingObject from "./UpdatingObject";

function App() {
  /*
  alert(sum())
  const [counter, setCounter] = useState(0)

  let frt = "Graps"
  const chngeFrt=() => {
    frt = "Orange"
  }
  const [fruit, setFruit] = useState("Apple")
  const handleFruit = () => {
    setFruit ("Litchi")
  }

  let userObject = {
    name: "Sumit Tripathi",
    age: 21,
    email:"sumit@test.com"
  }
  let userObject2 = {
    name: "Kashish ",
    age: 20,
    email:"Kashish@test.com"
  }
  let userObject3 = {
    name: "SpiderLiz ",
    age: 21,
    email:"SpiderLiz@test.com"
  }

  let collegeName = ["MIET", "DU", "IIT Bombay", "IIIT"];

  const [student, setStudent] = useState("Sumit Tripathi")

  const [val, setVal] = useState("Sumit Tripathi")

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
      const userData = [
        { id: 1, name: 'Sumit', age :20, email:'sumit@example.com' },
        { id: 2, name: 'Kashish', age:19, email:'k@example.com' },
        { id: 3, name: 'SpiderLiz', age:22, email:'SLz@example.com' },
        { id: 4, name: 'Tony', age:23, email:'t@example.com' },
        { id: 5, name: 'Steve', age:24, email:'s@example.com' }
      ];
  
  const [color, setColor] = useState("blue");
  const [cnt, setCnt] = useState(0);
  const [dta, setDta] = useState(0);
  const [display, setDisplay] = useState(true);

  const displayName = (name) => {
    alert(name)
  }
  const getUser = () => {
    alert("I'm Getting Users...")
  }

  const inputRef = useRef(null)
  const updateInput = () => {
    inputRef.current.value = 5775;
    inputRef.current.focus();
    inputRef.current.style.color='blue'
  }
  */

  // LiftingState.jsx
  const [user, setUser] = useState("");

  // Context API
  const [subject, setSubject] = useState('')
  return (
    <div style={{ backgroundColor: "yellow", padding: "15px" }}>
      {/* <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={() => { handleFruit() }}>Change fruit name</button> 
       <Counter /> 
      <Apps /> */}

      {/* <MultipleCondition /> */}
      {/* <Us name="Sumit" age={ 21} /> */}

      {/* <h1>Props in React JS</h1>
      <Us user={userObject} />
      <Us user={userObject2} />
      <Us user={userObject3} />

      <h1>There are best colleges, you can go for it</h1>
      <College name={collegeName} />
      
      {
        student && <Student name={student} />
      }
      <button onClick={() => setStudent("S7T")}>Update Student name</button> */}
      <h1>Hello</h1>
      {/* <User name="Sumit " />
      <User name = "Kasu" />
      <User />
      
       <Wrapper/> 
      <Wrapper>
        <h2>I'm using HTML</h2>
      </Wrapper>
      <Wrapper>
        <h2 style={{ color: 'blue' }}>What's going on?</h2>
        
      </Wrapper>

      <input type="text" value={val} onChange={(evt)=>{setVal(evt.target.value)}} placeholder="Enter your name" required />
      <h5>{val}</h5>
      <button onClick={()=>{setVal("")}}>Clear</button> */}

      {/* <form action="" method="get">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
        <br /> <br />
        <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
        <br /> <br />
        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
        <br /> <br />
        <button>Submit</button>
        <button onClick={(evt)=>{setName(' '), setEmail(' '), setPassword(' ')}}>Clear</button>

        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form> */}

      {/* <CheckBoxes /> */}

      {/* <RadioDropdown /> */}
      {/* <LoopWithMap /> */}

      {/* {
        userData.map((user) => (
          <div key={user.id}>
            <ReuseComponentInLoop data={user} />
          </div>
          ))
      } */}

      {/* <Clock color={ color} />
      <select onChange={(event) =>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"purple"}>Purple</option>
        <option value={"yellow"}>Yellow</option>
      </select> */}

      {/* <NestedLoop /> */}

      {/* <UseEffect /> 
      
      {
        display? <UseEffectProps cnt={cnt} dta={ dta} />:null
      }
      <button onClick={() => setCnt(cnt + 1)}>Counter</button>
      <button onClick={() => setDta(dta + 1)}>Incounter</button>
      <button onClick={()=> setDisplay(!display)}>Toggle</button> 
      
      <UserCard /> 
      <Style /> 
      <CssModule /> 
      <UseStyledComponent /> 
      <UseBootstrap/>  
      <UseRefrence />   
      <UnControlledComponent />  
      
      <h1>Call Parent component Function to child component</h1>
      <PassFunInCompoAsProps displayName={displayName} name="Sumit" onUser={getUser}/>
      <PassFunInCompoAsProps displayName={displayName} name="Kashish" onUser={getUser}/>
      <PassFunInCompoAsProps displayName={displayName} name="Kasu" onUser={getUser} />  
      <h1>Forward Ref</h1>
      <ForwardRefs ref={inputRef} />
      <button onClick={updateInput}>Update Input Field</button>  
      <UseFormStatusHook /> 
      <UseTransitionsReact />   
      <ComponentPureInReact /> 
      <DerivedState />   
      <LiftingState setUser={setUser} />
      <LiftingStates user={user} />  
      <UpdatingObject />   
      <UpdateArray />  
      <UseActionState />  
      <UseIDHook />
      <FragmentReact/>  
      <CustomHooks /> */}

      {/* Context API 

      <SubjectContexts.Provider value={subject}>
        <select value={subject} onChange={(e)=>setSubject(e.target.value)}>
          <option value="">Select subject</option>
          <option value="Maths">Maths</option>
          <option value="Hindi">Hindi</option>
          <option value="Physics">Physics</option>
        </select>
        
        <h1>Context API</h1>
        <button onClick={()=>setSubject('')}>Clear Subject</button>
        <CollegeContext />
      </SubjectContexts.Provider>  
      <ReactRoute />   */}

      {/* <AppRoute /> */}
      
    </div>

    /*
  <div>
      <h1>State in React JS with {frt}</h1>
      <button onClick={chngeFrt()}></button>
  </div>


    
    <div>
      <Header/>
      <h1>Hi Everyone</h1>
      <h1>new to react.js {sum()}</h1>
      <h1>Counter Value {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase Value</button> 

       <Fruits />
       <Color /> 
      <Login /> 
      <JSXex /> 
      <Oncli />
    </div>
    */
  );
}

{/*
}
function Fruits() {
  return (
    <h2>This is an Apple</h2>
  )
}
function Color(){
  return (
    <h3>Apple colour is Red </h3>
  )
}
function sum() {
  return 10+10
}
  */}

export default App