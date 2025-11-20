import { Link, useParams } from "react-router";

export default function UserDetails() {
    const paramData = useParams();
  return (
    <div style={{ margin: "20px" }}>
          <h1>User Details Page</h1> 
          <h2>User id: {paramData.id}</h2>
          <h3><Link to='/users'>Back to user</Link></h3>
    </div>
  );
}


//! I'll use Hook , useParam() Hook for show details on screen