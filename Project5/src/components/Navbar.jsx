import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 bg-black text-white flex rounded items-center justify-between'>
      <img src="https://cdn-icons-png.flaticon.com/512/164/164600.png" alt="user" className='w-10 h-10 rounded-full'/>
      <div className='flex gap-8 font-semibold'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick = {() => setToggle(prev => !prev)}  className='p-2 bg-blue-500 text-white cursor-pointer rounded'>Create user</button>
    </div>
  )
}

export default Navbar
