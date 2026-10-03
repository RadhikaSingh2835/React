import React from 'react'

const UserCard = ({users}) => {
  return (
    <div className='bg-gray-200 border-gray-400 border w-60 m-4 p-3 rounded flex flex-col items-center
     gap-4'>
      <div  className = "w-50 h-50 rounded">
        <img className ="h-full w-full rounded-4xl" src={users.image} alt="user" />
      </div>
      <div className='w-50 flex flex-col items-start gap-2'>
        <h2>{users.name}</h2>
        <p> {users.email}</p>
      </div>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 cursor-pointer">Delete</button>
    </div>
  )
}

export default UserCard
