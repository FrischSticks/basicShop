import React from 'react'
import { PRODUCTS } from '../products.js'
import { Product } from '../components/Product.jsx'
import '../css/Store.css'

const Store = () => {
  return (
    <div className='store'>
      <h1 className='welcomeMessage'> Welcome to the Shoe Sanctuary </h1>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Store