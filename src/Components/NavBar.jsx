import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export default function NavBar() {
  return (
    <nav>
        <h2>DailyNews</h2>

        <div id="SearchBar">
            <input type="text" placeholder='SearchNews....'/>
            <button>Search</button>
        </div>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Services'>Services</Link></li>
        </ul>

    </nav>
  )
}
