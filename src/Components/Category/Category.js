import menshoes from "../Images/menshoes.jpg";
import kidshoes from "../Images/kidshoes.jpg";
import womenshoes from "../Images/womenshoes.jpg";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./CategoryStyles.css";

const Category = () => {
  const [category, setCategory] = useState([]);
 

    useEffect(()=>{
      axios.get('http://localhost:3001/api/category')
      .then((result)=>{
        setCategory(result.data)
        console.log(category);
      }).catch((err)=>{
        console.log(err)
      });
    },[])
  
    // console.log(category);

  return (
    <div>
      <div class="MainPage-Container">
        {
          category.map((d,i)=>{
            return(

        <div class="items">
          <img src={menshoes} class="kundi" />
          <p class="categoryText1" key={d._id}>{d.title}</p>
          <p class="categoryText2" key={d._id}>{d.body}
          </p>
          <button className="shopButton" key={d._id}>{d.button}</button>
        </div>
          
            )
          })
      
      }
      </div>
    </div>
  );
};

export default Category;
