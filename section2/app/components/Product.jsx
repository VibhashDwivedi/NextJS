import React from 'react'
import ProductButton from './ProductButton'

const Product = (props) => {
  return (
    <div className='border border-black p-3'>
       <div>{props.title}</div>
       <div>{props.price}</div>
      

    </div>

  )
}

export default Product