import React, { useState , useRef } from "react";

const Form = () => {

const [products , setProducts] = useState();
const formRef = useRef({});
console.log(products);

const handleSubmit = (e) => {
    e.preventDefault(); 

    let obj ={
        productName : formRef.current.productName.value,
        price : formRef.current.price.value,
        category : formRef.current.category.value,
        image : formRef.current.image.value
    };

    setProducts(obj);
    
}

  return (
    <div className="bg-white flex flex-col gap-4 w-[300px] mx-auto border-2 border-gray-400 p-4 rounded-md">
      <form onSubmit ={handleSubmit} className="flex flex-col gap-4">
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="border-2 border-gray-400 p-2 rounded-md"
          type="text"
          placeholder="product name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="border-2 border-gray-400 p-2 rounded-md"
          type="text"
          placeholder="price"
        />
        <span>Select category</span>
        <select
        ref={(e) => (formRef.current.category = e)} className="border-2 border-gray-400 p-2 rounded-md">
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.image = e)}
          className="border-2 border-gray-400 p-2 rounded-md"
          type="url"
          placeholder="image url"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
