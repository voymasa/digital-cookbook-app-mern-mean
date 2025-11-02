const mongoose = require('mongoose');
import mongoConfig from ('mongoConnection');
const path = require('node:path'); // this allows access to specific app/user folders on device, iirc
import Recipe from '../models/recipeModel';

mongoose.connect('mongodb://localhost:27017/recipeDB', {useNewUrlParser: true})
    .then(() => console.log('Connected to recipe db'))
    .catch(error => console.log('A problem occurred when connecting to the recipe db', error));

class RecipeRepository {
    async findById(id) {
        await mongoose.connect(mongoConfig.uri, {
            useNewUrlParser: true
        }).then(() => {
            console.log('Connected to recipe db');
            return Recipe.findById(id).lean();
        }).catch(error => {
            console.log('A problem occurred when connecting to the recipe db', error);
        });
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