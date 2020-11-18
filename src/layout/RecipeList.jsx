import React, { useState, useContext, useEffect } from 'react'
import RecipeSearch from '../components/RecipeSearch'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { recipeDetailsData } from '../App';
import Loader from 'react-loader-spinner';
import { API } from '../API';

function RecipeList({ match }) {
    const getRecipes = async (key, name) => {
        try {
            const response = await fetch(`${API}recipe/${name}`);
            return await response.json();
        } catch (error) { }
    }

    const { data, status } = useQuery(['recipes', match.params.name], getRecipes);
    const [recipeList, setRecipeList] = useState([{}]);
    const { setRecipeData } = useContext(recipeDetailsData);


    const passDataToDetails = (name, description, category, ingredients, image, comments, _id) => {
        setRecipeData({ name, description, category, ingredients, image, comments, _id })
    }

    const switchIntoPolish = category => {
        switch (category) {
            case "breakfast":
                return "Śniadania";
            case "main":
                return "Dania główne";
            case "snacks":
                return "Przekąski";
            case "dessert":
                return "Desery"
        }
    }

    return (
        <div className="my-6 mx-auto w-11/12 rounded-md min-h-full bg-gray-800 text-white p-4">
            <h2 className="text-xl md:text-2xl text-center">{switchIntoPolish(match.params.name)}</h2>
            <RecipeSearch response={{ data, setRecipeList }} />
            {
                status === "success" ? (
                    <main className="my-6 mx-auto w-11/12 md:grid md:grid-cols-3 md:grid-rows-none md:gap-4 md:items-center md:justify-center">
                        {
                            recipeList.map(({ name, description, category, ingredients, image, comments, _id }, index) => (
                                <article
                                    className="my-6 md:mx-0 mx-auto md:w-full rounded-md min-h-full bg-gray-700 text-white p-4"
                                    key={index}
                                >
                                    {
                                        !image ? (null) : (<img
                                            className="my-0 mx-auto w-32 h-32 md:w-40 md:h-40 rounded-lg"
                                            src={image}
                                            alt={`${name} recipe ${category}`}
                                        />)
                                    }
                                    {
                                        name && (
                                            <h3 className="text-center text-2xl font-bold md:mt-4 md:text-3xl">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                                        )
                                    }
                                    <ol className="list-decimal mt-2">
                                        {
                                            ingredients && (
                                                ingredients.map((ingredient, index) => (
                                                    <li
                                                        className="text-md ml-10 md:text-xl md:ml-20"
                                                        key={index}
                                                    >{ingredient}</li>
                                                ))
                                            )
                                        }
                                    </ol>
                                    <Link
                                        to={`/recipes/details/${name}`}
                                        onClick={() => passDataToDetails(name, description, category, ingredients, image, comments, _id)}
                                    >
                                        <span className="underline cursor-pointer ml-6 mt-4 block md:-mb-10 md:text-lg md:ml-12">Pokaż cały przepis</span>
                                    </Link>
                                </article>
                            ))
                        }
                    </main>
                ) :
                    (
                        <Loader
                            className="flex justify-center mt-6"
                            type="Oval"
                            color="#fff"
                            height={55}
                            width={55}
                        />
                    )
            }
        </div>
    )
}

export default RecipeList
