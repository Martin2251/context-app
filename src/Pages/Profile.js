import React, {useContext} from 'react'
import { LoginContext } from '../Helper/Context'

const Profile = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
  return (
    <div style={{
        color: "red",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",

    }}> This is the Profile page</div>
  )
}

export default Profile