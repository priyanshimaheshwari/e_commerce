import React, {useState} from 'react';
import {  AiOutlineSearch,AiFillHeart,AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import {BsFillPersonFill,BsFillCartFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
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
          <AiOutlineClose size={25} className='absolute right-4 top-4 cursor-pointer'/>
          <nav>
          <ul>
              <button><li>Home</li></button>
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