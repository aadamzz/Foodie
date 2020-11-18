import React from 'react'

function PrepSteps({ list, setPreparationSteps }) {
    const deleteStep = value => {
        const filtered = list.filter(element => element !== value);
        setPreparationSteps([...filtered]);
    }

    return (
        <>
            <h2 className="text-lg pl-2">Etapy przygotowania</h2>
            <ul className="flex flex-col justify-center gap-4">
                {list.map((element, index) => (
                    <li className="flex items-center mb-2 bg-gray-700 p-4 rounded" key={index}>
                        <button
                            className="rounded-full mx-4 bg-gray-800 duration-500 hover:bg-gray-900"
                            onClick={() => deleteStep(element)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <span className="text-md md:text-xl max-w-full">{element}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PrepSteps

