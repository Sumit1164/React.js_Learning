import { NavLink, Outlet } from "react-router";

export default function CollegeNavBar() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1>College Page </h1>
      <NavLink className='link' to="student">Student</NavLink>
      <NavLink className='link' to="department">Department</NavLink>
       <NavLink className='link' to="details">Details</NavLink>
       <Outlet />
    </div>
  );
}
