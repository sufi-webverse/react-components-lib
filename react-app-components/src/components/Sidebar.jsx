import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>

        <div className='logo-container'>
            <img src="" alt="" />
            <span>Education2.0</span>
        </div>

        <div className='link-container'>
            <ul>
                <li>
                    <img src="" alt="" />
                    <a to="/">Dashboard</a>
                </li>
                <li>
                    <img src="" alt="" />
                    <a to="/performance">Performance</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
