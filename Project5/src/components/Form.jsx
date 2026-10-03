import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUsers, setToggle, users, update }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: update,
  });

  let formSubmit = (data) => {
    if (update) {
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === update.id ? { ...data } : val;
        });
      });
    } else {
      const arr = [...users, { ...data, id: nanoid() }];
      setUsers(arr);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-2 bg-gray-200 ">
      <h1 className="text-xl font-medium">Create user</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-80 flex flex-col gap-2 p-4 rounded bg-gray-200"
      >
        <input
          {...register("name", {
            required: "name is required",
            pattern: {
              value: /^\S(?:.*\S)?$/,
              message: "Please enter a valid name",
            },
          })}
          type="text "
          placeholder="Name"
          className="border-2 border-gray-400 rounded p-2 m-1"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          placeholder="Email"
          className="border-2 border-gray-400 rounded p-2 m-1"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register("contact", {
            required: "contact is required",
            minLength: { value: 10, message: "Minimum 10 digits are required" },
            maxLength: { value: 10, message: "Maximum 10 digits are required" },
          })}
          type="text"
          placeholder="Contact"
          className="border-2 border-gray-400 rounded p-2 m-1"
        />
        {errors.contact && (
          <p className="text-red-500">{errors.contact.message}</p>
        )}
        <input
          {...register("image", { required: "image is required" })}
          type="url"
          placeholder="Image URL"
          className="border-2 border-gray-400 rounded p-2 m-1"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer  hover:bg-blue-600">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
