import React from 'react'

function Ingredients({ list, setIngredientList }) {

    const deleteIngredient = value => {
        const filtered = list.filter(element => element !== value);
        setIngredientList([...filtered]);
    }

    return (
        <ol className="list-decimal flex flex-col justify-center">
            {list.map((element, index) => (
                <li className="ml-10 flex items-center mb-2" key={index}>
                    <button
                        className="rounded-full mx-4 bg-gray-700 duration-500 hover:bg-gray-600"
                        onClick={() => deleteIngredient(element)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                    <span className="text-xl">{element}</span>
                </li>
            ))}
        </ol>
    )
}

export default Ingredients
