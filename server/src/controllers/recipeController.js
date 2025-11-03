import RecipeRepository from '../data/recipeRepo';

class RecipeController {
    constructor() {
        this.recipeRepository = new RecipeRepository();
    }

    async getRecipes(request, response) {
        try {
            let recipes = await this.recipeRepository.findAll();
            response.status(200).send(recipes);
        } catch (error) {
            console.log('An error occurred while retrieving all recipes', error);
            response.status(500).send(error);
        }
    }

    async getRecipeById(request, response) {
        try {
            let recipe = await this.recipeRepository.findById(request.body.id);
            response.status(200).send(recipe);
        } catch (error) {
            console.log('An error occurred while retrieving a recipe with id: ${request.body.id}', error);
            response.status(500).send(error);
        }
    }

    async addRecipe(request, response) {
        try {
            const recipe = {
                name: request.body.name,
                description: request.body.description,
                ingredients: request.body.ingredients,
                instructions: request.body.instructions
                };

            // Todo: sanitize the input
            let result = await this.recipeRepository.create(recipe);
            response.status(201).send(result);
        } catch (error) {
            console.log('An error occurred while adding the recipe', error);
            response.status(500).send(error);
        }
    }

    async editRecipe(request, response) {
        try {
            console.log('Editing recipe with id: ${request.body.id');
            const recipe = {
                name: request.body.name,
                description: request.body.description,
                ingredients: request.body.ingredients,
                instructions: request.body.instructions
            };
            // Todo: sanitize the input
            let result = await this.recipeRepository.update(request.body.id, recipe);
            response.status(200).send(result);
        } catch (error) {
            console.log('An error occurred while updating the recipe', error);
            response.status(500).send(error);
        }
    }

    async deleteRecipe(request, response) {
        try {
            await this.recipeRepository.deleteRecipe(request.body.id);
            response.status(200).send();
        } catch (error) {
            response.status(500).send(error);
        }
    }
};

export default RecipeController;