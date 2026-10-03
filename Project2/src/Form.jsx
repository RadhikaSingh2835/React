import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState('');2

  return (
    <div>
      <input onChange={(e) => {setName(e.target.value) }} type="text" placeholder="Enter your name" />

    </div>
  )
}



export default Form
