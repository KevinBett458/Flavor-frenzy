import React from 'react';

function Favourites({ favourites }) {
  return (
    <div className='favourites'>
      <h3>Favourites</h3>
      <ul>
        {favourites.map((favourite) => (
          <li key={favourite.idMeal}>{favourite.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favourites;
