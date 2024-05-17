import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { removeFav, setFav } from './favSlice';

const Meals = () => {
    const { meals } = useParams(); //e3 Access meals from params object
    const [meal, setMeal] = useState([]);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favstore.fav);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`);
                console.log(response.data.meals);
                setMeal(response.data.meals);
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        };
        fetchData();
    }, [meals]); 

    const handleFavoriteToggle = (item) => {
        const isFavorite = favorites.some((fav) => fav.id === item.idMeal);
        if (isFavorite) {
            dispatch(removeFav(item.idMeal));
        } else {
            dispatch(setFav({ id: item.idMeal, ...item }));
        }
    };

    if (!meal.length) {
        return <div>Loading...</div>; // Show loading or placeholder
    }

    return (
        <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center'>
            {meal.map((item) => (
                <div key={item.idMeal} className="card" style={{ width: '500px' }}>
                    <img src={item.strMealThumb} alt="" />
                    <h2>{item.strMeal}</h2>
                    <button onClick={() => handleFavoriteToggle(item)}>
                        {favorites.some((fav) => fav.id === item.idMeal) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <div>
                        <h2 style={{ float: 'left' }}>INSTRUCTIONS</h2>
                        <h2 className='a mt-5'>{item.strInstructions}</h2>
                        <h2>VIDEO</h2>
                        {item.strYoutube && (
                            <iframe
                                width="500"
                                height="315"
                                src={`https://www.youtube.com/embed/${item.strYoutube.split('v=')[1]}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                        <h2>Ingredients:</h2>
                        <ul>
                            {[...Array(20)].map((_, i) => {
                                const ingredient = item[`strIngredient${i + 1}`];
                                if (ingredient) {
                                    return (
                                        <li key={i}>{ingredient}</li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Meals;
