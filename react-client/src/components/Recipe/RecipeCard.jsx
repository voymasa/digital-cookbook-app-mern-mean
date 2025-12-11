/*
This component contains a small amount of details about the recipe and is intended to be
in a list of cards.
The information should contain the name of the recipe, number of servings, prep time, cook time
and a small thumbnail of the dish.
When the user clicks on this component it should open the RecipeDetails form and loaded with information
for the recipe.
*/
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const RecipeCard = (name, thumb, servings, prep, cook) => {

    return (
        <>
            <Card>
                <CardHeader>
                    {{name}}
                </CardHeader>
                <CardContent>
                    <div>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={{thumb}}
                            text="recipe image"
                        />
                        <text>Servings: {{servings}} </text>
                    </div>
                    <div>
                        <text>Prep Time: {{prep}} </text>
                        <text>Cook time: {{cook}} </text>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default RecipeCard;