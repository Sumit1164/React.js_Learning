import ReuseComponentInLoop from "./ReuseComponentInLoop";

function LoopWithMap() {
    const citys = ['Pune', 'Mumbai', 'Banglore', 'Chennai', 'Hydrabad'];
    const users = [
        { id: 1, name: 'Sumit', age :20, email:'sumit@example.com' },
        { id: 2, name: 'Kashish', age:19, email:'k@example.com' },
        { id: 3, name: 'SpiderLiz', age:22, email:'SLz@example.com' },
        { id: 4, name: 'Tony', age:23, email:'t@example.com' },
        { id: 5, name: 'Steve', age:24, email:'s@example.com' }
    ];
    return (
        <div>
            <h1>Loop With Map Function</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
export default LoopWithMap;