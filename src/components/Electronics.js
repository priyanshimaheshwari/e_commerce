import React from 'react'

const Electronics = () => {
  return (
    <div>
        <div className='bg-pink-200 w-full h-[55px] font-bold text-center text-4xl '>
            Electronics
        </div>
        <div className=''>
            <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-80' src='https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
            <div className='rounded-xl relative grid md:grid-cols-4 px-20'>
                 <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Printer' /><h1 className='font-bold text-2xl text-white px-16'>Printer</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/3855536/pexels-photo-3855536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Camera' /><h1 className='font-bold text-2xl text-white px-16'>Camera</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Monitors' /><h1 className='font-bold text-2xl text-white pl-20'>Monitors</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Smart Bands' /><h1 className='font-bold text-2xl text-white pl-16'>Smart Bands</h1></div>
                 

            </div>
        </div>
    </div>
  )
}

export default Electronics