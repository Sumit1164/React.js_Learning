import { Link } from "react-router"

export default function UserList() {
    const userData = [
        {id:1, name:'Sumit'},
        {id:2, name:'Kashish'},
        {id:3, name:'Peter'},
        {id:4, name:'Lizz'},
        {id:5, name:'SuKa'},
    ]
    return (
      <div style={{ margin: "20px" }}>
        <h1>User List Page</h1>
        {userData.map((item) => (
          <div>
            <h4>
              <Link to={"/users/" + item.id}>{item.name}</Link>
            </h4>
          </div>
        ))}
      </div>
    );

}