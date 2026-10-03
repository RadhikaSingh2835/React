import React from 'react'

const Practice = () => {
    const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Mouse", price: 1000, inStock: true }
];
  return (
   <ul>
    {products.map((product) => (
        <li className ="card" key={product.id} style={{margin:"10px"}} >
            <h3>{product.name}</h3>
            <p>Price : {product.price}</p>
            <p style={{color: product.inStock ? "green" : "red"}}>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </li>
    ))}
   </ul>
  )
}

export default Practice
