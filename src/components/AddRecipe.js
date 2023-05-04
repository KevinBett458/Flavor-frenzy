import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ThumbUp } from "@mui/icons-material";
import 'react-toastify/dist/ReactToastify.css';
import { ThumbDown } from "@mui/icons-material";

function AddRecipe() {
  const [newRecipe, setNewRecipe] = useState([]);

  //fetching data from db.json 
  useEffect(() => {
    fetch("http://localhost:8001/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNewRecipe(data);
      });
  }, []);

  return (
    <div className="dataResult">
      <ToastContainer />
       {newRecipe.map((value) => {
          return (
            <div key={value.id} className="mealContainer"  >
              <img src={value.image}
                alt={value.name}
                className="mealThumb" />
              <div className="mealName">{value.name}</div>
              <div>
                <button className="like-btn" >
                  <ThumbUp />
                </button>
                <button className="dislike-btn"  >
                  <ThumbDown />
                </button>
              </div>
              <div className="view-recipe-btn">
                <button >
                  View Recipe
                </button>
              </div>
            </div>
       )}
      )}
    </div>
  )
}

export default AddRecipe;