import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './header'

const Profile = () => {
  const { userid } = useParams()
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title" innerText="Profile">Profile
            <Link to="/dashboard/main">Go To Main</Link>
            <Link to="/dashboard">Go To Root</Link>
          </div>
        </div>
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          {userid}
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default React.memo(Profile)
