import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Main = () => {
  return (
    <div>
      <Header />
      <div id="title" innerText="Main">Main</div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title" innerText="Main">Main</div>
          <Link to="/dashboard/profile/3e9a44f1-4625-47bc-a990-b5cf38a300ab">Go To Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
