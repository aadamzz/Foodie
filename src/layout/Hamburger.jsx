import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function Hamburger() {

    return (
        <header>
            <Navbar className="bg-gray-800" expand="lg">
                <h1 className="text-3xl md:text-4xl"><Link to="/" className="text-white">Foodie</Link></h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#4a5568 !important", border: "1px solid white" }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ul className="flex flex-col gap-2 mt-4">
                            <li><Link className="text-white text-lg" to="/recipes/breakfast">Śniadania</Link></li>
                            <li><Link className="text-white text-lg" to="/recipes/main">Dania główne</Link></li>
                            <li><Link className="text-white text-lg" to="/recipes/snacks">Przekąski</Link></li>
                            <li><Link className="text-white text-lg" to="/recipes/dessert">Desery</Link></li>
                            <li>
                                <Link to="/add" className="justify-self-center">
                                    <div className="bg-gray-600 rounded-full inline-block mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <line x1="12" y1="5" x2="12" y2="19" />
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Hamburger
