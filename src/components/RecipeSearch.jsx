import React, { useState, useEffect, useRef } from 'react'

function RecipeSearch({ response }) {
    const [input, setInput] = useState("");

    const { data, setRecipeList } = response;

    const inputRef = useRef();

    useEffect(() => {
        if (data) {
            setRecipeList(
                data.filter(({ name }) => {
                    return name.toLowerCase().includes(input.toLowerCase());
                })
            );
        }
    }, [input, data]);

    return (
        <section>
            <div
                className="my-6 mx-auto w-11/12 rounded-md min-h-full bg-gray-700 text-white p-2 md:p-4 flex justify-center items-center cursor-pointer"
                onClick={() => inputRef.current.focus()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
                <input
                    className="w-full bg-gray-700 rounded ml-2 p-2 placeholder-white cursor-pointer"
                    value={input}
                    onChange={event => setInput(event.currentTarget.value)}
                    type="text"
                    placeholder="Wyszukaj przepis"
                    ref={inputRef}
                />
            </div>
        </section>
    )
}

export default RecipeSearch
