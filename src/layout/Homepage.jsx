import React from 'react'

function Homepage() {
    return (
        <div>
            <h1 className="text-white text-center text-xl mt-6 px-2 md:text-2xl tracking-wider leading-8">Witaj w aplikacji Foodie pozwalającej dodawać twoje ulubione przepisy</h1>
            <p className="mx-4 mt-4 text-lg md:text-lg tracking-wider text-center leading-8">W prawym górnym rogu znajduje się przycisk
            <span className="mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus inline" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
             dzięki, któremu będziesz w stanie dodać nowy przepis. Po lewej stronie nazwy kategorii, na które przepisy są podzielone. Kliknij w nie aby wyświetlić spis.</p>
        </div>
    )
}

export default Homepage
