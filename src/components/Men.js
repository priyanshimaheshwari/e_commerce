import React from 'react'


const Men = () => {
  return (
    <div>
        <div className='bg-pink-100 w-full h-[55px] font-bold text-center text-4xl '>
            
            Fashion Hacks for him
        </div>
        <div className=''>
            <img className='absolute w-full h-[300px] py-1 object-cover  mix-blend-overlay opacity-80' src='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
            <div className='rounded-xl relative grid md:grid-cols-5 px-10'>
                 <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Hoodie</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/2463256/pexels-photo-2463256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white px-16'>Shorts</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>T-Shirts</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Jeans</h1></div>
                 <div><img className='h-[260px] w-[250px] pt-6' src='https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold text-2xl text-white pl-20'>Shirts</h1></div>

            </div>
        </div>
    </div>
  )
}

export default Men