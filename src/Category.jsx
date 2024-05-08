import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Category = () => {
    const[category,setCategory]=useState([])
    useEffect(()=>
    {
        let fetchdata=async()=>{
            let response=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            console.log(response.data)
            setCategory(response.data.categories)
        }
        fetchdata()
        },[])
  return (
    <div className='categories flex-wrap gap-4 justify-content-center'>
      {category.map((item,index)=>(
        <div class="card "style={{width:'400px'}}>
        <img src={item.strCategoryThumb}  class="img card-img-top" alt="recipe"/>
        <p class="card-text text-center">{item.strCategory}</p>
        </div>
    ))}
    </div>
  )
}

export default Category
