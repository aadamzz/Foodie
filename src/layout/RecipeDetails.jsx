import React, { useContext, useEffect, useState } from 'react'
import { recipeDetailsData } from '../App';
import { useHistory } from 'react-router-dom'
import { API } from '../API';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

function RecipeDetails() {
    const { recipeData, setRecipeData } = useContext(recipeDetailsData);
    const { name, description, ingredients, image, category, comments, _id } = recipeData;
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    const deleteRecipe = async id => {
        setLoader(true);
        try {
            await fetch(`${API}recipe/delete/${id}`, {
                method: "DELETE"
            });

            setLoader(false);

            history.push("/");
        } catch (error) {
            setLoader(false);
        }
    }

    useEffect(() => {
        return () => {
            setRecipeData({
                name: "",
                description: "",
                category: "",
                ingredients: "",
                image: "",
                _id: ""
            })
        }
    }, [])

    return (
        <main className="my-6 mx-auto w-11/12 rounded-md min-h-full bg-gray-800 text-white p-4">
            <h1 className="text-2xl text-center font-bold md:text-3xl tracking-wider">{name.charAt(0).toUpperCase() +
                name.slice(1)}</h1>
            {
                image ? (
                    <img className="my-0 mx-auto w-64 h-64  rounded-lg mt-4" src={image} alt={`${name} recipe ${category}`} />
                ) : (
                        <img className="my-0 mx-auto w-64 h-64  rounded-lg mt-4" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt={`${name} recipe ${category}`} />
                    )
            }
            <ul className="flex justify-center flex-col mt-6 md:items-center">
                <li className="ml-10 md:ml-0">
                    <h2 className="text-xl md:text-2xl font-bold tracking-wider">Składniki: </h2>
                </li>
                {
                    ingredients && (
                        ingredients.map((ingredient, index) => (
                            <li className="text-lg ml-10 md:text-xl md:ml-0" key={index}>- {ingredient}</li>
                        ))
                    )
                }
            </ul>
            <h3 className="text-xl md:text-2xl text-center font-bold mt-6 mb-4 tracking-wider">Sposób przygotowania</h3>
            {/* <p className="text-xl md:text-2xl leading-7 md:text-center mb-4">{description}</p> */}
            <ul>
                {
                    description.map((element, index) => (
                        <li key={index}>
                            <p className="text-xl md:text-2xl leading-7 md:text-center mb-4 leading-7 px-2">{index + 1}. {element}</p>
                        </li>
                    ))
                }
            </ul>
            {
                comments && (
                    <>
                        <h4 className="text-xl md:text-2xl text-center font-bold mt-6 mb-4 tracking-wider">Dodatkowe komentarze</h4>
                        <p className="text-xl md:text-2xl leading-7 md:text-center mb-4">{comments}</p>
                    </>
                )
            }
            <div className="flex justify-between">
                <button
                    className="border-2 p-2 border-dashed rounded-md duration-500 hover:bg-gray-600 mt-8 md:mb-4 md:ml-4"
                    onClick={() => setDeletePopUp(true)}>Usuń przepis</button>
                <Link to={`/edit/${_id}`}
                    className="border-2 p-2 border-dashed rounded-md duration-500 hover:bg-gray-600 mt-8 md:mb-4 md:ml-4">Edytuj przepis
                </Link>
            </div>
            {
                deletePopUp && (
                    <section className="my-0 mx-auto w-11/12 mt-6 rounded-md min-h-full bg-gray-800 text-white p-4">
                        <h4 className="text-lg tracking-wider font-bold text-center">Czy chcesz usunąć ten przepis?</h4>
                        {
                            loader ? (
                                <>
                                    <span className="block text-center text-white text-xl mt-4">Usuwanie...</span>
                                    <Loader className="flex justify-center mt-6" type="Oval" color="#fff" height={55} width={55} />
                                </>
                            ) : (
                                    <div className="flex items-center justify-center mt-2 justify-evenly">
                                        <button
                                            className="text-lg cursor-pointer duration-500 sm:active:bg-gray-600 hover:bg-gray-600 rounded p-2 w-20 text-center"
                                            onClick={() => deleteRecipe(_id)}>Tak</button>
                                        <button
                                            className="text-lg cursor-pointer duration-500 sm:active:bg-gray-600 hover:bg-gray-600 rounded p-2 w-20 text-center"
                                            onClick={() => setDeletePopUp(false)}>Nie</button>
                                    </div>
                                )
                        }
                    </section>
                )
            }
        </main>
    )
}

export default RecipeDetails