import { NavLink, Route, Routes } from "react-router";
import AddUserListUI from "./AddUserListUI";
import UserListsUI from "./UserListsUI";

export default function UserListUI() {
  return (
    <div>
      {/* <h1>Integrate JSON Server API and Loader</h1> */}
      <ul className="nav-list">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserListsUI />} />
        <Route path="/add" element={<AddUserListUI />} />
      </Routes>
    </div>
  );
}