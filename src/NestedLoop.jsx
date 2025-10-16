const NestedLoop = () => {
    const collegeData = [
        {
            name: "MIET",
            city:"Greater Noida",
            website:"www.miet.in",
            student:[
                {
                    name:"Sumit Tripathi",
                    age:21,
                    email:"sumit7@test.com"
                },
                {
                    name:"Kashish Bansal",
                    age:20,
                    email:"kashish5@test.com"
                }
            ]
        },
        {
            name: "GNIOT",
            city:"Greater Noida",
            website:"www.gniot.in",
            student:[
                {
                    name:"Sumit Tripathi",
                    age:21,
                    email:"sumit7@test.com"
                },
                {
                    name:"Kashish Bansal",
                    age:20,
                    email:"kashish5@test.com"
                }
            ]
        },
        {
            name: "LOYYD",
            city:"Greater Noida",
            website:"www.loyyd.in",
            student:[
                {
                    name:"Sumit Tripathi",
                    age:21,
                    email:"sumit7@test.com"
                },
                {
                    name:"Kashish Bansal",
                    age:20,
                    email:"kashish5@test.com"
                }
            ]
        },
        {
            name: "KCC",
            city:"Greater Noida",
            website:"www.kcc.in",
            student:[
                {
                    name:"Sumit Tripathi",
                    age:21,
                    email:"sumit7@test.com"
                },
                {
                    name:"Kashish Bansal",
                    age:20,
                    email:"kashish5@test.com"
                }
            ]
        }
    ]
    return (
        <div
            style={{margin:"20px", backgroundColor:"red", padding:"15px", borderRadius:"10px"}}
        >
            <h3>Nesting Loop in React</h3>
            {
                collegeData.map((college, index) => (
                    <div key={index}>
                        <h1>Name: { college.name}</h1>
                        <ul>
                            <li><h3>City: {college.city}</h3></li>
                            <li><h3>Website: {college.website}</h3></li>
                            <li>
                                <h3>Students</h3>
                                {
                                    college.student.map((student) => (
                                        <ul><li>Name: { student.name}</li></ul>
                                    ))
                                }
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default NestedLoop;