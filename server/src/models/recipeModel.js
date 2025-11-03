import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    description: String,
    ingredients: String,
    instructions: String
});

module.exports = mongoose.model('Recipe', recipeSchema);