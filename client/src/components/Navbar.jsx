import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-500 text-white px-20'>
        <div>BlogApp</div>
      <nav className=''>
        <ul className='flex '>
            <li className='px-5 py-3 cursor-pointer hover:bg-slate-700 hover:'>LOGIN</li>
            <li className='px-5 py-3 cursor-pointer hover:bg-slate-700 hover:'>REGISTER</li>
            <li className='px-5 py-3 cursor-pointer hover:bg-slate-700 hover:'>LOGOUT</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
