import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
const Allitems = () => {
  let { item } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        setItems(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [item]);

  const handleItemClick = (selectedItem) => {
    console.log('Clicked item:', selectedItem);
    // history.push(`/meals/${selectedItem.idMeal}`);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5 w-25 mx-auto ">
            <input type="search" id="form1" className="form-control" placeholder='serach'/>
          <button type="button" className="btn btn-primary" data-mdb-ripple-init>
          <FaSearch />
          </button>
          </div>

      <div className='d-flex flex-wrap gap-4 justify-content-center text-md-center mt-5'>
        {items?.map((item) => (
          <div key={item.idMeal} className="card" style={{ width: '300px' }} onClick={() => handleItemClick(item)}>
            {/* <Link to={`/meals/${item.idMeal}`}> */}
              <img className='w-100' src={item.strMealThumb} alt="" />
            {/* </Link> */}
            <h2>{item.strMeal}</h2>
            <Link to={`/meals/${item.idMeal}`} className="details mt-2  btn btn-success rounded-pill justify-content-center fw-bold ">VIEW DETAILS</Link>
          <br/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Allitems;
