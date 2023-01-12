import React from 'react'

const Kid = () => {
    return (
        <div>
            <div className='bg-yellow-100 w-full h-[55px] font-bold text-center text-4xl '>
                
               Kid's fashion fiesta
            </div>
            <div className=''>
                <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-0' src='https://images.pexels.com/photos/35857/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
                <div className='rounded-xl relative grid md:grid-cols-4 px-20'>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/1133721/pexels-photo-1133721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Dresses</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/1650281/pexels-photo-1650281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Shirts</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Babysuits</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/1620812/pexels-photo-1620812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Bottom wear</h1></div>
                     
    
                </div>
            </div>
        </div>
      )
    }

export default Kid