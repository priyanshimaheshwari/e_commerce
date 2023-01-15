import React, {useState} from 'react';
import {AiFillHeart,AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {BsFillPersonFill,BsFillCartFill} from 'react-icons/bs'
import{BiSearch} from 'react-icons/bi'



const Navbar = () => {
    const [nav, setNav] = useState(false)
  
    

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 h-20 bg-blue-200'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <div className='text-3xl font-bold text-blue-300'>
           <h1>BUY ME</h1>
        </div>
        
        <ul className='hidden md:flex'>
                <button><li className='px-8 hover:underline '>Home</li></button>
                <button><li className='px-8 hover:underline'>
                    shop</li></button>
                <button><li className='px-8 hover:underline'>Blog</li></button>
                <button><li className='px-10 hover:underline'>About</li></button>
                <button><li className=' hover:underline'>Contact</li></button>
            </ul>
        
        <div className='flex justify-between'>
        <BiSearch size={25} className='bg-white h-[50px]'/>
        <input type='text' placeholder='Search Product' />
        <div  id="Profile"> <button><span title="Profile"><BsFillPersonFill size={25} /></span></button></div>
        <div id="Fav"> <button><span title="Fav"><AiFillHeart size={25}/></span></button></div>
        <div id="Cart"> <button><span title="Cart"><BsFillCartFill size={25}/></span></button></div>
        
 

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
          <ul className='flex flex-col p-10'>
              <button><li className='text-xl py-2 hover:bg-gray-500 hover:text-white rounded-xl'>Home</li></button>
              <button className='text-xl py-2  hover:bg-gray-500 hover:text-white rounded-xl'><li className='text-xl py-2  hover:bg-gray-500 hover:text-white rounded-xl'>Shop</li></button>
              <button><li className='text-xl py-2  hover:bg-gray-400 hover:text-white rounded-xl '>Blog</li></button>
              <button><li className='text-xl py-2  hover:bg-gray-500 hover:text-white rounded-xl'>About</li></button>
              <button><li className='text-xl py-2  hover:bg-gray-500 hover:text-white rounded-xl'>Contact</li></button>
          </ul>
          </nav>
      </div>

    </div>
  )
}

export default Navbar