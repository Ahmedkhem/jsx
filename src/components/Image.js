import React from 'react'
import { product } from './product'

const Image = () => {
  return (
    <div> <img width={200} src={product.imgUrl} alt='Jersey'  />  </div>
  )
}

export default Image
