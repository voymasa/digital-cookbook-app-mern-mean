import { Router } from 'express';
import RecipeController from '../controllers/recipeController';

const router = Router();
const recipeController = new RecipeController();

router.get('/', recipeController.getRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/add', recipeController.addRecipe);
router.put('/edit/:id', recipeController.editRecipe);
router.delete('/delete/:id', recipeController.deleteRecipe);

export const RecipeRoutes = router;