import React from 'react';
import './Product.css';
// import { addToLS } from '../AddToLs/addToLs';
const Product = ({product, addToCart}) => {
    // console.log(product);
    const {id, img, name, price, quantity} = product;
    return (
        <div className='product'>
           <h2>{name} </h2>
           <div className="img">
           <img src={img} alt="" />
           </div>
           <p>Price: <b>{price} </b></p>
           <p>Quantity: <b>{quantity} </b></p>
           <p>ID: <b>{id} </b></p>
           <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;