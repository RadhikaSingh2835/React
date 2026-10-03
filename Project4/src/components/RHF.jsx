import React from "react";
import { useForm } from "react-hook-form";

const RHf = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-white flex flex-col gap-4 w-300 mx-auto border-2 border-gray-400 p-4 rounded-md">
      REACT HOOK FORM
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        className="flex flex-col gap-4"
      >
        <input
          {...register("product name")}
          className="border-2 border-gray-400 p-2 rounded-md"
          type="text"
          placeholder="product name"
        />
        <input
          {...register("price")}
          className="border-2 border-gray-400 p-2 rounded-md"
          type="text"
          placeholder="price"
        />
        <input
          {...register("category")}
          type="text"
          placeholder="category"
          className="border-2 border-gray-400 p-2 rounded-md"
        />

        <input
          {...register("image")}
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

export default RHf;
