import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const product = (props) => {
  const { name, image,price} = props.phone;

  return (
    <div className='card'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      <div className='phone-info'>
        <h1>{name}</h1>
        <h1>$ {price}</h1>
      </div>
      <div className='add-to-cart'>
        <button onClick={() => props.handleAddToCart(props.phone)}>
          <BsFillCartFill className='icon' />
        </button>
       
      </div>
    </div>
  );
};

export default product;