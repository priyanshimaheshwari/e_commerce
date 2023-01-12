import React from 'react'

const Category = () => {
  return (
    <div>
        <img className='absolute w-full h-[225px] py-1 object-cover  mix-blend-overlay opacity-40' src='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        
        <div className='flex justify-between py-4 px-10 '>
        
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        <select className='relative '>
          <option>Fashion</option>
          <option>Men's Bottom Wear</option>
          <option>Men's Top Wear</option>
          <option>Women's Western Wear</option>
          <option>Women's Ethnic Wear</option>
          <option>Men Footwear</option>
          <option>Women Footwear</option>
          <option>Kids</option>
          <option>Accessories</option>
          <option>Winter wear</option></select></div>
        
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><select className='relative px-8'><option>Grocery</option></select></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><select className='relative px-8'><option>Mobiles</option></select></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><select className='relative '>
          <option>Electronics</option>
          <option>Audio</option>
          <option>Gaming</option>
          <option>Powerbank</option>
          <option>Laptop and Desktop</option>
          <option>Laptop Accessories</option>
          <option>Mobile Accessories</option>
          <option>Smart Wear</option>
          <option>Personal and Health Care</option>
          <option>Storage</option></select></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><select className='relative '>
          <option>Home</option>
          <option>Bedroom furniture</option>
          <option>Kitchen and dinning</option>
          <option>Cleaning and bath</option>
          <option>Kid furniture</option>
          <option>Pet and gardening</option>
          <option>Lightings and electrics</option>
          <option>Home decor</option>
          <option>Tool and utility</option>
          <option>Work space furniture</option></select></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/1450903/pexels-photo-1450903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><select className='relative px-8'><option>Appliances</option></select></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><select className='relative px-10'><option>Travel</option></select></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/14866348/pexels-photo-14866348.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='/' /><select className='relative '>
          <option>Beauty and personal care</option>
          <option>Food and drinks</option>
          <option>Music</option>
          <option>Books</option>
          <option>Baby care</option>
          <option>stationary</option>
          <option>Sports and fitness</option>
          <option>Safety and Hygiene essentials</option>
          </select>
        </div>
        </div>
        </div>
        
    
  )
}

export default Category