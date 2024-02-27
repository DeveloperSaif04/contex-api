import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/Usercontext'

const Login = () => {

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const {setuser} = useContext (UserContext)

const handleSubmit= (e)=>{
  e.preventDefault()
  setuser({username,password})
}

return (
  <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-3xl font-bold mb-4">Login</h2>
    <input
      type="text"
      placeholder="Name"
      value={username}
      onChange={(e) => setusername(e.target.value)}
      className="border p-2 mb-4 rounded-sm"
    />
    <input
      type="text"
      placeholder="Password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      className="border p-2 mb-4 rounded-sm"
    />
    <button
      onClick={handleSubmit}
      className="border p-2 rounded-sm border-black"
    >
      Submit
    </button>
  </div>
);
}

export default Login