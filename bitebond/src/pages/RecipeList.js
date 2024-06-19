import React from 'react';
import { Link } from'react-router-dom';

const RecipeList = () => {
    const recipes = [
        { id: 1, name: 'Recipe 1' },
        { id: 2, name: 'Recipe 2' },
    ];

    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/add-recipe">
                <button>Add Recipe</button>
            </Link>
        </div>
    );
};

export default RecipeList;