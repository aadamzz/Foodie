import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-800 w-full h-20 flex justify-around xl:grid items-center xl:justify-center xl:grid-cols-3 xl:grid-rows-1">
            <Link to="/" className="text-white justify-self-center"><h1>Foodie</h1></Link>
            <nav>
                <ul className="flex gap-6 w-full justify-evenly md:justify-around items-center mb-0">
                    <li className="text-sm md:text-xl"><Link className="no-underline text-white" to="/recipes/breakfast">Śniadania</Link></li>
                    <li className="text-sm md:text-xl"><Link className="no-underline text-white" to="/recipes/main">Dania główne</Link></li>
                    <li className="text-sm md:text-xl"><Link className="no-underline text-white" to="/recipes/snacks">Przekąski</Link></li>
                    <li className="text-sm md:text-xl"><Link className="no-underline text-white" to="/recipes/dessert">Desery</Link></li>
                </ul>
            </nav>
            <Link to="/add" className="justify-self-center">
                <div className="bg-gray-600 rounded-full ml-2">
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
