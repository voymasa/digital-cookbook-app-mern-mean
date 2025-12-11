import react from 'react';
import RecipeList from '../components/Recipe/RecipeList';

/*
This page contains the components to list the recipes the user currently has.
This should contain a list of recipe cards, and buttons to add and delete recipes.
The user should also be able to click on a recipe card and edit that recipe (this
functionality should be in the recipe card component itself, likely)
*/
const RecipePage = () => {



    return (
        <>
            <RecipeList/>
            <Fab color="primary" arial-label="add"
                onclick={() => newRecipe()}>
                <AddIcon />
            </Fab>
        </>
    );
}

const newRecipe = () => {
    // create a new recipe model and pass it to the recipe details page
}

export default RecipePage;