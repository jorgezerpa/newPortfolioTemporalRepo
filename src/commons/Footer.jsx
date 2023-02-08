import React from 'react'

export const Footer = () => {
  return (
    <footer className='mt-52 flex justify-center items-center w-full h-[100px] bg-blue-800'>
        <p className='text-lg font-bold text-white flex items-center gap-1'>
          Don't worry, be coder 
          <span>
            <img width={30} src="images/smile.png" alt="" />
          </span>
          </p>
    </footer>
  )
}
