import React, { useState } from "react";

const Register = ({ setToggle , setUsers , setCreateUser }) => {

    const [formData , setFormdata] = useState({});
   

    const handleChange =(e) => {
        let {name , value} = e.target;
        setFormdata({...formData , [name] :value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers((prev) => [...prev, formData]);
        setFormdata({
             name:"",
             email:"",
             password:"",
             image:"",
        })
        setCreateUser(prev => !prev);
    }

  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col justify-center items-center gap-4">
      <h1>Register</h1>
      <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4" action="">
        <input
        required
        value={formData.name}
        name="name"
        onChange={handleChange}
          className="p-2 border border-gray-400 rounded w-80 hover:border-blue-500 hover:border-2"
          type="text"
          placeholder="Name"
        />
        <input
        required
        value={formData.email}
        name="email"
        onChange={handleChange}
          className="p-2 border border-gray-400 rounded w-80 hover:border-blue-500 hover:border-2"
          type="email"
          placeholder="Email"
        />
        <input
        required
        value={formData.password}
        name="password"
        onChange={handleChange}
          className="p-2 border border-gray-400 rounded w-80 hover:border-blue-500 hover:border-2"
          type="password"
          placeholder="Password"
        />
        <input
        required
        value={formData.image}
        name="image"
        onChange={handleChange}
          className="p-2 border border-gray-400 rounded w-80 hover:border-blue-500 hover:border-2"
          type="url"
          placeholder="Image URL"
        />
        <button className="bg-blue-500 w-80 p-1 text-white rounded cursor-pointer  hover:bg-blue-600">
          Register
        </button>
      </form>
      <p>
        Already have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-500 cursor-pointer hover:text-blue-600"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
