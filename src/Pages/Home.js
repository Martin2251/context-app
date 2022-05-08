import React, {useContext} from 'react'
import { LoginContext } from '../Helper/Context'

const Home = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
  return (
    <div style={{
        color: "blue",
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
    }

    }>This is Home Page
    </div>
  );
}

export default Home;