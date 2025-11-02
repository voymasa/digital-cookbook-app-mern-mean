const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    ingredients: String,
    instructions: String
});

const Recipe = module.exports = mongoose.model('Recipe', recipeSchema);

// get all of the recipes from the database
module.exports.getRecipes = (callback) => {
    Recipe.find((error, data) => {
        if (error) {
            console.log(error);
            callback(error, null);
        }
        else {
            callback(null, data);
        }
    });
};


// add a new recipe to the database
module.exports.addRecipe = (newRecipe, callback) => {
    const recipe = new Recipe({
        name: newRecipe.name,
        description: newRecipe.description,
        ingredients: newRecipe.ingredients,
        instructions: newRecipe.instructions
    });
    recipe.save(callback);
};

// update a recipe in the database
module.exports.updateRecipe = (editRecipe, callback) => {
    let recipe = Recipe.findByIdAndUpdate(editRecipe._id, editRecipe);
    if (recipe === null || recipe === undefined) {
        console.log('Could not find recipe with ${editRecipe._id}');
        callback('Error, recipe not found.', null);
    }
    else {
        recipe.save(callback);
    }
};