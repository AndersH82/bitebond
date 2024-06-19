import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading } from '@chakra-ui/react';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    image: null,
  });

  const { addRecipe } = useContext(RecipeContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setRecipe({
      ...recipe,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({
      title: '',
      ingredients: '',
      instructions: '',
      prepTime: '',
      cookTime: '',
      image: null,
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box width="50%">
        <Heading as="h2" mb={6}>Add a New Recipe</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="title">Title:</FormLabel>
            <Input
              type="text"
              id="title"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="ingredients">Ingredients:</FormLabel>
            <Textarea
              id="ingredients"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="instructions">Instructions:</FormLabel>
            <Textarea
              id="instructions"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="prepTime">Preparation Time:</FormLabel>
            <Input
              type="text"
              id="prepTime"
              name="prepTime"
              value={recipe.prepTime}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="cookTime">Cooking Time:</FormLabel>
            <Input
              type="text"
              id="cookTime"
              name="cookTime"
              value={recipe.cookTime}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="image">Upload Image:</FormLabel>
            <Input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">Add Recipe</Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddRecipe;