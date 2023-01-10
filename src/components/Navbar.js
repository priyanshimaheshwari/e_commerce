
import React from 'react';
import {  AiOutlineSearch,AiFillHeart,AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import {BsFillPersonFill,BsFillCartFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 h-20'>
        <AiOutlineMenu size={25}/>
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

      {/* Side drawer menu */}
      <div>
          <AiOutlineClose />
      </div>

    </div>
  )
}

export default Navbar