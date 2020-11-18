import React from 'react'
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <div className="flex items-center w-full h-full flex-col mt-6 px-2">
            <h1 className="text-3xl md:text-6xl tracking-wider">404</h1>
            <h2 className="text-2xl md:text-5xl tracking-wider my-6">Nie znaleziono strony 🤨</h2>
            <Link to="/">
                <span className="text-xl cursor-pointer text-white md:text-3xl tracking-wider underline">Przejdź do strony głównej...</span>
            </Link>
        </div>
    )
}

export default NoMatch
