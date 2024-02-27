import React, { useContext } from 'react'
import '../css/ShoppingCart.css'
import { ShopContext } from '../context/shopContext'

const CartItem = (props) => {

const { id, productName, price, productImage } = props.data;
const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <h3>{productName}</h3>
            <h4>${price}</h4>
            <div className='countHandler'>
              <button onClick={ () => removeFromCart(id) }> - </button>
              <input type="text" value={ cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />
              <button onClick={ () => addToCart(id) }> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem