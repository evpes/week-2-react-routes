import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'


const Home = () => {
  return (
    <div>
      <Header />
      <div id="title" innerText="Dashboard">Dashboard</div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title" innerText="Dashboard">Dashboard</div>
          <Link to="/dashboard/profile/3e9a44f1-4625-47bc-a990-b5cf38a300ab">Go To Profile</Link>
          <Link to="/dashboard/main">Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
