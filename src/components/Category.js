import React from 'react'

const Category = () => {
  return (
    <div>
        <h1 className='font-bold text-5xl h-[full] w-[full] '>Category</h1>
        <div className='flex justify-between py-4 px-10 '>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt='/'/><h1 className='font-bold pl-12 '>Women</h1></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/' /><h1 className='font-bold pl-14'>Men</h1></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold pl-14'>Kids</h1></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/325527/pexels-photo-325527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold pl-10'>Accessories</h1></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><h1 className='font-bold pl-10'>Furniture</h1></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/4108800/pexels-photo-4108800.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/' /><h1 className='font-bold pl-10'>Home</h1></div>
        </div>
    </div>
  )
}

export default Category