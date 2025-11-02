let recipeModel = require("../models/recipeModel");

let recipeController = {
    getRecipes(request, response) {
        recipeModel.getRecipes((error, data) => {
            if (error) {
                console.log(error);
                response.status = 404;
            }
            else if (data) {
                response.status = 200;
                response.body(data);
            }
            return response;
        });
    },
    addRecipe(request, response) {
        console.log('Add recipe', request.body);
        // Todo: add input sanitizing and validation
        const recipe = {
            name: request.body.name,
            description: request.body.description,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions
        };

        recipeModel.addRecipe(recipe, (error, data) => {
            if (error) {
                console.log(error);
                response.status = 400;
            }
            else if (data) {
                response.status = 201;
                response.body(data);
            }
            return response;
        });
    },
    editRecipe(request, response) {
        console.log('Edit recipe', request.body);
        // Todo: add input saniziting and validation
        const recipe = {
            name: request.body.name,
            description: request.body.description,
            ingredients: request.body.ingredients,
            instructions: request.body.instructions
        };

        recipeModel.editRecipe(recipe, (error, data) => {
            if (error) {
                console.log(error);
                response.status = 400;
            }
            else if (data) {
                response.status = 200;
                response.body(data);
            }
            return response;
        })
    },
    deleteRecipe(request, response) {

    }
};

module.exports = recipeController;