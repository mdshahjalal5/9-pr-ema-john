import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // console.log(cart);
    let quantity = 0;
    let price = 0;
    let shipping = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;        
    }
    // console.log(quantity)
    return (
        <div className='cart'>
            <div className="cart-info">
                <h2>Order Summary</h2>
                <p>Quantity:{quantity} </p>
                <p>Total Price: {price} </p>
                <p>Total Shipping: {shipping} </p>
            </div>
        </div>
    );
};

export default Cart;