/*
This component is a form with the details of a recipe, and buttons to save and cancel.
This component should have a create button if it is a new recipe, or a save button if
it is a recipe that already exists (i.e. edit/update recipe).

*/
import { useState } from 'react';

const RecipeDetails = (recipeInfo) => {
    const [recipe, setRecipe] = useState(recipeInfo);

    return (
        <>
        </>
    );
}

export default RecipeDetails;