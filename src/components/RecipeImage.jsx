import React from 'react'

function RecipeImage({ src, removeImg }) {
    return (
        <div className="my-0 mx-auto w-36 mb-6 relative">
            <img src={src} alt="recipe food foodie" className="object-cover w-full h-auto" />
            <button
                className="rounded-full mx-4 bg-gray-700 duration-500 hover:bg-gray-600 absolute"
                style={{ top: "-10px", right: "-35px" }}
                onClick={() => removeImg(null)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="45" height="45" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>
        </div>
    )
}

export default RecipeImage


