import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-800 w-full h-20 flex items-center justify-between">
            <nav className="relative">
                <ul className="flex ml-6 md:ml-10 w-full justify-evenly md:justify-around items-center">
                    <li className="text-sm md:text-xl"><Link to="/recipes/breakfast">Śniadania</Link></li>
                    <li className="text-sm md:text-xl"><Link to="/recipes/main">Dania główne</Link></li>
                    <li className="text-sm md:text-xl"><Link to="/recipes/snacks">Przekąski</Link></li>
                    <li className="text-sm md:text-xl"><Link to="/recipes/dessert">Desery</Link></li>
                </ul>
            </nav>
            <Link to="/add">
                <div className="bg-gray-600 rounded-full ml-2 mr-4 md:mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </div>
            </Link>
        </header>
    )
}

export default Header
