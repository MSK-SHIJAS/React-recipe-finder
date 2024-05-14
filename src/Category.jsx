import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


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
<Carousel>
      <Carousel.Item>
      <img src="rp.png" class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="rp.png" class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="rp.png" class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

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
