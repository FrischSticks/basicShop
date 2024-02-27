import React, { useContext } from 'react'
import { PRODUCTS } from '../products'
import { ShopContext } from '../context/shopContext'
import  CartItem  from '../components/CartItem'
import { useNavigate } from 'react-router-dom'

const ShoppingCart = () => {

  const { cartItems, getTotalCost } = useContext(ShopContext);
  const totalCost = getTotalCost();
  const navigate = useNavigate();

  return (
    <div className='shoppingCart'>
      <div className="cartTitle"> <h1> Items in Cart: </h1> </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      { totalCost > 0 ? (
        <div className='cartFooter'>
          <h2>Total: ${ totalCost }</h2>
          <button onClick={ () => navigate('/') }>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="emptyCartFooter">
          <h2> Your Cart is Empty!</h2>
          <button onClick={ () => navigate('/') }>Continue Shopping</button>
        </div>
      )}
    </div>
  )
}

export default ShoppingCart