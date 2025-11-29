export default function AddUserListUI() {
  return (
    <div>
      <h1>Add New User</h1>
      <input type="text" name="Name" id=""  placeholder="Enter user name"/>
      <input type="text" name="Age" id="" placeholder="Enter user age"/>
      <input type="text" name="Email" id="" placeholder="Enter user email" />
      <button>Add User</button>
    </div>
  );
}