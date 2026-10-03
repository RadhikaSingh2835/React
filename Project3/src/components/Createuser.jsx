import React from 'react'

const Createuser = ({ setCreateUser }) => {
  return (
    <>
    <div className='bg-gray-300 flex flex-col items-end p-4 '>
      <button 
      onClick={() => setCreateUser(prev => !prev)}
      className="bg-blue-500 w-40 p-2 text-white rounded cursor-pointer  hover:bg-blue-600">
          Create User
        </button>
       </div>
    </>
  )
}

export default Createuser
