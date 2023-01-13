import React from 'react'

const Shoe = () => {
    return (
        <div className='py-2'>
            <div className='bg-blue-100 w-full h-[55px] font-bold text-center text-4xl '>
                
                Final Touches
            </div>
            <div className=''>
                <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-80' src='https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
                <div className='rounded-xl relative grid md:grid-cols-5 px-10'>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Sneakers</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Watches</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/5669253/pexels-photo-5669253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Formal Shoes</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/255305/pexels-photo-255305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Sunglasses</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Heels</h1></div>
    
                </div>
            </div>
        </div>
      )
    }
    
export default Shoe