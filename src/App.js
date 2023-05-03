import React from 'react'
import Search from './components/Search'
import MealData from './database/db.json'

function App() {
  return (
    <div className='App'>
      <Search placeholder='Enter a meal name....' data={MealData.meals}/>
    </div>
  )
}

export default App
