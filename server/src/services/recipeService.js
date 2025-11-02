const Recipe = require('recipeModel');

class RecipeService {
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    async getRecipeList() {
        const recipes = await this.recipeRepository.findAll();

        return recipes;
    }

    async getRecipe(id) {
        const recipe = await this.recipeRepository.findById(id);

        return recipe;
    }

    async createRecipe(name, description, ingredients, instructions) {

    }
}