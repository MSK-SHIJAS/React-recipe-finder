import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { removeFav, setFav } from './favSlice';

function Recipie() {
    const { idM } = useParams();
    const [recipe, setRecipe] = useState(null);  // Initialized as null to handle single recipe
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favstore.fav);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idM}`);
            console.log(response.data);
            setRecipe(response.data.meals[0]);  // Assume only one meal is returned
        };
        fetchData();
    }, [idM]);

    const isFavorite = recipe && favorites.some((item) => item.id === recipe.idMeal);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFav(recipe.idMeal));
        } else {
            const newItem = { id: recipe.idMeal, ...recipe };
            dispatch(setFav(newItem));
        }
    };

    if (!recipe) {
        return <div>Loading...</div>;  // Show loading or placeholder
    }

    return (
        <div className='p-3'>
            <div>
                <button onClick={handleFavoriteToggle}>
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
                <h1 className='fs-1 fw-bolder mb-3'>{recipe.strMeal}</h1>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className='w-25 m-3' />
                <h3 className='fs-1 fw-bolder mb-3'>Instructions</h3>
                <p className='text-reset'>{recipe.strInstructions}</p>
                {/* Uncomment and configure YouTube if needed */}
                {/* <YouTube videoId={parseYouTubeId(recipe.strYoutube)} opts={opts} onReady={onReady} /> */}
            </div>
        </div>
    );
}

export default Recipie;