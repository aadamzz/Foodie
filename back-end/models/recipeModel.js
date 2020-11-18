const mongoose = require('mongoose');

const newRecipeSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, require: true },
    description: { type: Array, require: true },
    category: { type: String, require: true },
    ingredients: { type: Array, require: true },
    comments: { type: String, require: false },
    image: { type: String, require: true }
})

module.exports = newRecipe = mongoose.model("newRecipe", newRecipeSchema)