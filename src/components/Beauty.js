import React from 'react'


const Beauty = () => {
    return (
        <div className='py-2'>
            <div className='bg-orange-200 w-full h-[55px] font-bold text-center text-4xl '>
                
                Beauty Products
            </div>
            <div className=''>
                <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-80' src='https://images.pexels.com/photos/12641061/pexels-photo-12641061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
                <div className='rounded-xl relative grid md:grid-cols-5 px-10'>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/11436269/pexels-photo-11436269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Face Washes' /><h1 className='font-bold text-2xl text-white px-16'>Face Washes</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/10415083/pexels-photo-10415083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Lip Care' /><h1 className='font-bold text-2xl text-white px-16'>Lip Care</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Makeup' /><h1 className='font-bold text-2xl text-white pl-20'>Makeup</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/7161700/pexels-photo-7161700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Skin Care' /><h1 className='font-bold text-2xl text-white pl-20'>Skin Care</h1></div>
                     <div><img className='h-[260px] w-[250px] pt-6 shadow-lg hover:scale-105 duration-300' src='https://images.pexels.com/photos/7290669/pexels-photo-7290669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Brushes' /><h1 className='font-bold text-2xl text-white pl-20'>Brushes</h1></div>
    
                </div>
            </div>
        </div>
      )
    }

export default Beauty