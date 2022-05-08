import React, {useContext} from 'react'
import { LoginContext } from '../Helper/Context'

const Login = () => {

    const {loggedIn, setLoggedIn} = useContext(LoginContext);
  return (
    <div
    style={{
        color: "green",
        borderWidth: 1,
        bordercolor: "black",
        borderStyle: "solid",
    }}

    >
        this is a login page <button onClick={() => setLoggedIn(true)}>Click here to login</button>
        {loggedIn ? <h1>You are logged in </h1> : <h1>You are not logged in</h1>}
    
    </div>
  )
}

export default Login