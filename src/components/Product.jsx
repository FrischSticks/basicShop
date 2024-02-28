import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

export const Product = (props) => {

  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className='singleProduct'>
      <h1>{ productName }</h1>
      <img src={ productImage } alt={ productName } />
      <div className="lowerText">
        <h2 className='price'>${ price }</h2>
        <button className='addToCartBtn' onClick={() => addToCart(id)}> 
          Add to Cart 
          { cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  )
}