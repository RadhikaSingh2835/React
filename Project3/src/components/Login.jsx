import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="bg-white w-90 p-6 rounded-xl flex flex-col justify-center items-center gap-4">
      <h1>Login</h1>
      <form className="flex flex-col items-center gap-4" action="">
        <input
          className="p-2 border border-gray-400 rounded w-80 hover:border-blue-500 hover:border-2"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 border border-gray-400 rounded w-80 hover:border-blue-500 hover:border-2"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 w-80 p-1 text-white rounded cursor-pointer hover:bg-blue-600">
          Login
        </button>
      </form>
      <p>
        Didn't have an Account?{" "}
        <span
          onClick={() => setToggle((prev) => !prev)}
          className="text-blue-500 cursor-pointer hover:text-blue-600"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
