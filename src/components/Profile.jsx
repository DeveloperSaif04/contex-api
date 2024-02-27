import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/Usercontext'

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
      return (
        <div className="text-center mt-8">
          <p className="text-red-500">Please login </p>
        </div>
      );
    }
    
    return (
      <div className="text-center mt-8">
        <p className="text-green-500">Welcome, {user.username}</p>
        <p className="text-green-500">Password, {user.password  }</p>
      </div>
    );
}

export default Profile