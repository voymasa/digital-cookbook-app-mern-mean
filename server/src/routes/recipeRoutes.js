import { Router } from 'express';
import { getRecipes, addRecipe, editRecipe, deleteRecipe } from '../controllers/recipeController';

const router = Router();

router.get('/', getRecipes);
router.post('/add', addRecipe);
router.put('/edit/:id', editRecipe);
router.delete('/delete/:id', deleteRecipe);

export const RecipeRoutes = router;