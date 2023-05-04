import React from 'react';

function Favourites({ favourite }) {
  return (
    <div className='favourites'>
      <h3>Favourites</h3>
      <ul>
        {favourite && favourite.length > 0 ? (
          favourite.map((favourite) => (
            <li key={favourite.idMeal}>{favourite.strMeal}</li>
          ))
        ) : (
          <li>No favourites added yet.</li>
        )}
      </ul>
    </div>
  );
}


export default Favourites;
