import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-grey-200">
      <UserContextProvider>
        {/* <h1>context</h1> */}
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );  
}

export default App