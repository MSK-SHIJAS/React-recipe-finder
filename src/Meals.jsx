import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Meals = () => {
    let {meals}=useParams()
    const [meal,setMeal]=useState([''])
useEffect(()=>{
    let fetchData=async ()=>{
        let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`)
        console.log(response.data.meals);
        setMeal(response.data.meals)
    }
    fetchData()
},[])
  return (
    <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center '>
            {meal?.map((item)=>(
                   <div class="card "style={{width:'300px'}}>
                    <img src={item.strMealThumb} alt="" />
                    <h2>{item.strMeal}</h2>
                  </div>
            ))}    
    </div>
  )
}

export default Meals