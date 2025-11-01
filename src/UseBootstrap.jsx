import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
const UseBootstrap = () => {
    return (
        <div>
            <h1>Hi i'm BootStrap</h1>
            <div style={{ margin: 20}}>
            <Button>Login</Button>
             <br /><br />
            <button>Sigin</button>
            </div>
            <div style={{ margin: 20}}>
             <Alert>You are Hacked!</Alert><br /><br />
            <Button variant='success'>You</Button><br /><br />
            <Button variant='primary'>Are</Button><br /><br />
            <Button variant='danger'>My</Button><br /><br />
            <Button variant='warning'>Dream</Button><br /><br />
            <Button variant="info">Google!</Button><br /><br />
            </div> 
            
        </div>
    )
}
export default UseBootstrap;