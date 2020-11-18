const router = require('express').Router();
const newRecipe = require('../models/recipeModel');

router.post('/new', async (req, res) => {
    try {
        let { name, description, category, ingredients, comments, image } = req.body;

        if (!name || !description || !category || !ingredients || !image)
            return res
                .status(500)
                .json({ message: "Brak wymaganych danych" })

        if (name.length < 3)
            return res
                .status(500)
                .json({ message: "Nazwa potrawy powinna być dłuższa niż trzy znaki." })

        name = name.toLowerCase();

        const existingRecipe = await newRecipe.findOne({ name: name })
        if (existingRecipe)
            return res
                .status(500)
                .json({ message: "Przepis z podaną nazwą już istnieje." })

        const addRecipe = new newRecipe({
            name,
            description,
            category,
            ingredients,
            comments,
            image
        })

        const savedRecipe = await addRecipe.save()
        res.json({
            response: "Dodano nowy przepis",
            recipe: savedRecipe
        })

    } catch (error) {
        return res
            .status(500)
            .json({ error: error.message })
    }
})

router.get("/:category", async (req, res) => {
    try {
        const recipeCategory = await newRecipe.find({ category: req.params.category });
        res.json(recipeCategory);
    } catch (error) {
        return res
            .status(500)
            .json({ error: error.message })
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const removedRecipe = await newRecipe.findByIdAndRemove({ _id: req.params.id });
        res.json({ message: "Usunięto przepis", recipe: removedRecipe })
    } catch (error) {
        res
            .status(500)
            .json({ message: error.message })
    }
})

module.exports = router;