import React from 'react'

const ProductCard = ({product , del}) => {
  return (
    <div className="p-2 border-2 h-fit rounded-2xl">
      <div className="w-60">
        <img className ="rounded-2xl w-40 h-50" src={product.image} alt={product.title} />
      </div>
      <div>
        <h2>Name of Product : {product.title.substring(0, 15)}</h2>
        <p>Category : {product.category}</p>
        <p>Price : {product.price}</p>
      </div>
      <button className='bg-red-500 text-white p-2 rounded-lg' onClick={() => del(product.id)}>Delete</button>
    </div>
  )
}

export default ProductCard
