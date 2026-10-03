import React from "react";

const UserCard = ({users, onDelete,setToggle, setUpdate}) => {
  return (
    <div className="p-4 bg-gray-300  rounded-xl border-2 border-gray-400">
      <div className="h-40 w-45">
        <img
          src={users.image}
          alt="user"
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-1">
        <h1>Name :{users.name} </h1>
        <p className='text-sm'>Email :{users.email}</p>
        <p className='text-sm'>Contact :{users. contact}</p>
      </div>
      <div className="flex gap-7 mt-2">
        <button
        onClick={() => {
          setUpdate(users);
          setToggle(prev => !prev);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
        <button 
        onClick={() => {
          onDelete(users.id)
        }}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
