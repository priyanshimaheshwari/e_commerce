import React, {useState} from 'react';
import {  AiOutlineSearch,AiFillHeart,AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import {BsFillPersonFill,BsFillCartFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 h-20'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <div className='text-3xl font-bold text-blue-300'>
           <h1>BUY ME</h1>
        </div>
        
        <ul className='hidden md:flex'>
                <button><li className='px-8'>Home</li></button>
                <button><li className='px-8'>
                    shop</li></button>
                <button><li className='px-8'>Blog</li></button>
                <button><li className='px-10'>About</li></button>
                <button><li>Contact</li></button>
            </ul>
        
        <div className='flex justify-between'>
        <AiOutlineSearch size={25} />
        <input type='text' placeholder='Search Product' />
        <button><BsFillPersonFill size={25} /></button>
        <button><AiFillHeart size={25}/></button>
        <button><BsFillCartFill size={25}/></button>
        </div>

        {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
          <nav>
          <ul className='flex flex-col p-4'>
              <button><li className=''>Home</li></button>
              <button><li>Shop</li></button>
              <button><li>Blog</li></button>
              <button><li>About</li></button>
              <button><li>Contact</li></button>
          </ul>
          </nav>
      </div>

    </div>
  )
}

export default Navbar