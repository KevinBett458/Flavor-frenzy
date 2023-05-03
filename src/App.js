import React, { useState } from 'react'
import Search from './components/Search'
import MealData from './database/db.json'
import RecipeForm from './components/AddRecipe'

function App() {

  const [meals , setMeals] = useState (MealData);

  const handleAddRecipe = (recipe) => {
    setMeals ([...meals ,recipe]);
  };

  return (
    <div className='App'>
      <Search placeholder='Enter a meal name....' data={MealData}/>
      <RecipeForm addRecipe={handleAddRecipe} />
    </div>
  )
}

export default App