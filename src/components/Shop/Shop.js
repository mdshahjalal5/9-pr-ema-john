import React, { useState,useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../../components/Cart/Cart.js'
import { addToLS } from '../AddToLs/addToLs';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const datas = async() =>{
        const res = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
        const data = await res.json();
        setProducts(data);
    }
    useEffect(()=>{

        datas()
    },[])
    useEffect(() =>{
      const storedCart = JSON.parse(localStorage.getItem('shopping-cart'));
      let savedCart = [];
      if(storedCart){
        for(const id in storedCart){
           const addedProducts = products.find(product => product.id === id);
           if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
           }
        }
        setCart(savedCart);
      }
    },[products ])
  
    const addToCart =(selectedProduct) => {
        addToLS(selectedProduct.id)
      const exists = cart.find(product => product.id === selectedProduct.id);
    //   console.log(exists)
      if(exists){
            selectedProduct.quantity = selectedProduct.quantity + 1;
           const rest = cart.filter(product => product.id !==selectedProduct.id);
           setCart([...rest, selectedProduct])
      }
      else{
        selectedProduct.quantity = 1;
        setCart([...cart, selectedProduct]);
      }
    //   console.log(cart, 'final cart')
    }
    return (
       <>
        <div className="shop-container">
        <div className='products-container'>
            {products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product> )}
        </div>
        <div className="cart-container">
            <Cart cart = {cart}></Cart>
        </div>
        </div>
       </>
    );
};

export default Shop;