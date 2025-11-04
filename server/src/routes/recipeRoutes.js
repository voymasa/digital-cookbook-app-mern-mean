import { Router } from 'express';
import { check } from 'express-validator';
import rateLimit from 'express-rate-limit';
import RecipeController from '../controllers/recipeController';

const router = Router();
const recipeController = new RecipeController();

const recipeLimiter = new rateLimit({
    windowMs: 30000,
    max: 10,
    message: 'Too many requests to recipes, please wait and try again'
});

router.get('/', recipeLimiter, recipeController.getRecipes);
router.get('/:id', recipeLimiter, 
[
    check('id').isInt({min: 1})
], recipeController.getRecipeById);
router.post('/add', recipeLimiter, 
[
    check('name').isAlphanumeric().trim().escape(),
    check('description').isAlphanumeric().trim().escape(),
    check('ingredients').isAlphanumeric().trim().escape(),
    check('instructions').isAlphanumeric().trim().escape()
], recipeController.addRecipe);
router.put('/edit/:id', recipeLimiter, 
[
    check('id').isInt({min: 1}),
    check('name').isAlphanumeric().trim().escape(),
    check('description').isAlphanumeric().trim().escape(),
    check('ingredients').isAlphanumeric().trim().escape(),
    check('instructions').isAlphanumeric().trim().escape()
], recipeController.editRecipe);
router.delete('/delete/:id', recipeLimiter, 
[
    check('id').isInt({min: 1})
], recipeController.deleteRecipe);

export const RecipeRoutes = router;