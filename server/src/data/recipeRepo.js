import { openConnection, closeConnection } from './mongoClient';
import Recipe from '../models/recipeModel';

class RecipeRepository {
    async findById(id) {
        try {
            await openConnection();
            let recipes = await Recipe.findById(id).lean();
            return recipes;
        } catch (error) {
            console.log('There was an error retrieving the recipes', error);
            return [];
        } finally {
            await closeConnection();
        }
    }

    async findAll() {
        return await Recipe.find().lean();
    }

    async create(newRecipe) {
        const recipe = new Recipe(newRecipe);
        return await recipe.save();
    }

    async update(id, editData) {
        return await Recipe.findByIdAndUpdate(
            id,
            {...editData, updatedAt: new Date() },
            { new: true, runValidators: true }
        ).lean();
    }

    async delete(id) {
        return await Recipe.findByIdAndUpdate(
            id,
            { deletedAt: new DataTransfer(), status: 'deleted' },
            { new: true }
        );
    }
}