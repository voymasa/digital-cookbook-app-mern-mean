import { useState } from 'react';
import Stack from '@mui/material/Stack';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // fetch the recipes
    },[]);

    return (
        <>
            <Stack useFlexGap: true>
                {recipes.map((rec) => (
                    <RecipeCard
                        key={rec.id}
                        name={rec.name}
                        thumb={rec.image}
                        servings={rec.servings}
                        prep={rec.prep}
                        cook={rec.cook}
                    />
                ))}
            </Stack>
        </>
    );
}

export default RecipeList;