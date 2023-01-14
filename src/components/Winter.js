import React from 'react'

const winter = () => {
    return (
        <div className='py-2'>
            <div className='bg-indigo-200 w-full h-[55px] font-bold text-center text-4xl '>
                
                Winter essentials
            </div>
            <div className=''>
                <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-80' src='https://images.pexels.com/photos/33834/landscape-shore-sunset-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
                <div className='rounded-xl relative grid md:grid-cols-5 px-10'>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Jackets' /><h1 className='font-bold text-2xl text-white px-16'>Jackets</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Gloves' /><h1 className='font-bold text-2xl text-white px-16'>Gloves</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/7222851/pexels-photo-7222851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Long Coats' /><h1 className='font-bold text-2xl text-white pl-20'>Long Coats</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/4348555/pexels-photo-4348555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Muffler' /><h1 className='font-bold text-2xl text-white pl-20'>Muffler</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/13946211/pexels-photo-13946211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Track Pants' /><h1 className='font-bold text-2xl text-white pl-20'>Track Pants</h1></div>
    
                </div>
            </div>
        </div>
      )
    }
    

export default winter