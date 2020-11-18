import React, { useState, useRef, useEffect } from 'react'
import Ingredients from '../components/Ingredients';
import { API } from '../API';
import Loader from 'react-loader-spinner';

function AddRecipe() {
    const [query, setQuery] = useState({
        title: "",
        description: "",
        category: "",
        ingredient: "",
        comments: ""
    });
    const [ingredientList, setIngredientList] = useState([]);
    const [errors, setErrors] = useState("");
    const [image, setImage] = useState();
    const [preview, setPreview] = useState()
    const [loader, setLoader] = useState(false);

    const fileInputRef = useRef();

    const handleQuery = event => {
        setQuery({ ...query, [event.currentTarget.name]: event.currentTarget.value });
    }

    const addNewRecipe = async () => {
        setErrors("");
        if (!query.title || !query.description) setErrors("Uzupełnij wymagane pola.");
        if (ingredientList.length < 2) setErrors("Dodaj co najmniej dwa składniki.")
        if (!preview) setErrors("Zdjęcie potrawy jest wymagane.")
        if (query.title.length < 3) setErrors("Nazwa potrawy powinna byc dłuższa niż trzy znaki.")

        const config = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: query.title,
                description: query.description,
                category: query.category,
                ingredients: ingredientList,
                comments: query.comments,
                image: preview
            })
        }

        setLoader(true);

        try {
            const response = await fetch(`${API}recipe/new`, config);
            const data = await response.json();
            setQuery({
                title: "",
                description: "",
                category: "",
                ingredient: "",
                comments: ""
            });
            if (data.message === "Przepis z podaną nazwą już istnieje.") {
                setErrors(data.message)
                return;
            }
            setLoader(false);
            setIngredientList([]);
            setPreview();
        } catch (error) {
            setLoader(false);
        }
    }

    const addNewIngredient = ing => {
        let repeats = false;
        if (ing.length <= 2) {
            alert("Nazwa składnika powinna składać się z więcej niż dwóch znaków.");
            return;
        }

        ingredientList.forEach(element => {
            if (element === ing) {
                repeats = true;
            }
        })

        if (!repeats) {
            setIngredientList([...ingredientList, ing]);
            setQuery({ ...query, ingredient: "" });
        } else alert("Podany składnik jest już dodany.")
    }

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(image);
        } else setPreview(null);
    }, [image])

    return (
        <div className="my-6 mx-auto w-11/12 rounded-md min-h-full bg-gray-800 text-white p-4">
            <form className="grid gap-6" onSubmit={event => event.preventDefault()}>
                <input
                    className="bg-gray-700 rounded p-2 placeholder-white"
                    type="text"
                    value={query.title}
                    name="title"
                    onChange={handleQuery}
                    placeholder="Nazwa potrawy - wymagane"
                />
                <div className="flex items-center">
                    <input
                        className="bg-gray-700 rounded p-2 placeholder-white w-full"
                        type="text"
                        value={query.ingredient}
                        name="ingredient"
                        onChange={handleQuery}
                        placeholder="Dodaj składnik - wymagane"
                    />
                    <button
                        className="rounded-full mx-4 bg-gray-700 duration-500 hover:bg-gray-600"
                        onClick={() => addNewIngredient(query.ingredient)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                </div>
                {
                    ingredientList.length > 0 ? <Ingredients list={ingredientList} setIngredientList={setIngredientList} />
                        :
                        (null)
                }
                <textarea
                    className="bg-gray-700 rounded p-2 placeholder-white"
                    type="text"
                    value={query.description}
                    name="description"
                    onChange={handleQuery}
                    placeholder="Opis potrawy - wymagane"
                />
                <select
                    className="bg-gray-700 rounded p-2 placeholder-white"
                    name="category"
                    value={query.category}
                    onChange={handleQuery}
                >
                    <option value="breakfast">Śniadanie</option>
                    <option value="main">Danie główne</option>
                    <option value="snacks">Przekąska</option>
                    <option value="dessert">Deser</option>
                </select>
                <textarea
                    className="bg-gray-700 rounded p-2 placeholder-white"
                    type="text"
                    value={query.comments}
                    name="comments"
                    onChange={handleQuery}
                    placeholder="Dodatkowe komentarze"
                />
                <input className="hidden"
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={event => {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") setImage(file)
                        else setImage(null);
                    }}
                />
                <div
                    className="flex justify-center relative items-center bg-gray-700 rounded-md cursor-pointer"
                    onClick={() => fileInputRef.current.click()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-upload absolute-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                        <line x1="12" y1="11" x2="12" y2="17" />
                        <polyline points="9 14 12 11 15 14" />
                    </svg>
                    <button
                        className="py-2 md:py-4 text-md md:text-xl text-white">
                        Dodaj zdjęcie - wymagane
                    </button>
                </div>
                {preview ? (
                    <div className="my-0 mx-auto w-36 mb-6">
                        <img
                            className="object-cover w-full h-auto cursor-pointer"
                            src={preview}
                            alt="food recipe"
                            onClick={() => setPreview(null)}
                        />
                    </div>
                ) :
                    (
                        null
                    )}
                {
                    loader ? (
                        <Loader
                            className="flex justify-center mt-8"
                            type="Oval"
                            color="#fff"
                            height={55}
                            width={55}
                        />
                    ) : (
                            <button
                                className="rounded-md bg-gray-700 mt-8 py-2 md:py-4 text-md md:text-xl text-white"
                                onClick={() => addNewRecipe()}
                            >
                                Dodaj przepis
                            </button>
                        )
                }
            </form>
            <h3 className="text-md text-center mt-4">{errors}</h3>
        </div>
    )
}

export default AddRecipe
