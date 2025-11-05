import { useState } from 'react';
import Stack from '@mui/material/Stack';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    const recipeList = 

    return (
        <>
            <Stack useFlexGap: true>
                {recipes.map((rec) => 
                    <RecipeCard>
                        
                    </RecipeCard>
                )}
            </Stack>
        </>
    );
}

export default RecipeList;