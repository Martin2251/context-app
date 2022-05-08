
import './App.css';
import { useState } from 'react';
import {LoginContext} from "./Helper/Context"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

function App() {

  const [logginIn, setLoggedIn]= useState(false)
  return (
    <LoginContext.Provider value={{logginIn, setLoggedIn}}>
     <Home/>
     <Login />
      <Profile />
    </LoginContext.Provider>
  );
}

export default App;
