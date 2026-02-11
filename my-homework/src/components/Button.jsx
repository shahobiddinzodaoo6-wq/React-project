import React from 'react'

const Button = (prod) => {
  return (
    <>
    <button style={{backgroundColor: `${prod.bg}`}} className='w-[170px] h-[50px]  text-[white]  border-none  '>{prod.text}</button>
    </>
  )
}

export default Button