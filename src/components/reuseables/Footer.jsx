import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className='w-full bg-[#3956f0] p-[10px]  text-center text-white text-sm'>
    <p className=''>&copy; {currentYear} - j & y cleaning services</p>
  </section>  )
}

export default Footer