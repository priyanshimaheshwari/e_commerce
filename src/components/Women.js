import React from 'react'

const Women = () => {
    return (
        <div className='py-4'>
            <div className='bg-violet-200 w-full h-[55px] font-bold text-center text-4xl '>
                
                Glam goals for her
            </div>
            <div className=''>
                <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-80' src='https://images.pexels.com/photos/4272482/pexels-photo-4272482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
                <div className='rounded-xl relative grid md:grid-cols-5 px-10'>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Dresses</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/13251953/pexels-photo-13251953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Tops</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/2820793/pexels-photo-2820793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Skirts</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/8819340/pexels-photo-8819340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Ethnic</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/7205905/pexels-photo-7205905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Bottom wear</h1></div>
    
                </div>
            </div>
        </div>
      )
    }
    

export default Women