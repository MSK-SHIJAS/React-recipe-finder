import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    <>
    <div className='mt-3'>
    <img src="rp.png" class="img-fluid w-100" alt="abhi"/>
    <p class="text fs-1 fw-bold">Find recipes for every occasion<br/>
     Cooking has never been easier</p>
     <input class="SEARCH btn btn-success rounded-piLl" type="submit" value="SEARCH"></input>
  </div>



    <div className='categories flex-wrap gap-4 justify-content-center'>
      {category.map((item,index)=>(
        <div class="card "style={{width:'400px'}}>

<Link to={`/detail/${item.strCategory}`}>
<img src={item.strCategoryThumb}  class="img card-img-top" alt="recipe"/>
 </Link>

        <p class="card-text text-center">{item.strCategory}</p>
        </div>
    ))}
    </div>
    </>
  )
}

export default Category
