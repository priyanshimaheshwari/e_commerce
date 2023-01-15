import React, { useState } from 'react'

const Category = ({options1},{options2}) => 
{
  const[showOptions1 , setShowOptions1]=useState(false);
  const[showOptions2 , setShowOptions2]=useState(false);
  const handleClick =() => {setShowOptions1(!showOptions1);};
  const electroClick =() =>{setShowOptions2(!showOptions2);};
  
  return (
    <div className='pb-5'>
        <img className='absolute w-full h-[225px] py-1 object-cover  mix-blend-overlay opacity-40' src='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
        
        <div className='flex justify-between py-4 px-10 '>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        <div >
  <div class="relative inline-block text-left">
  <div>
    <button 
    onClick={handleClick}
    type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Fashion
<svg class="-mr-1 ml-2 h-5 w-5"  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {showOptions1 && (
<div class="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1 pl-4" role="none">
     {options1 &&
          options1.map((option1)=>(
            <a href="#" class="text-gray-700 block  py-2 text-sm hover:bg-slate-300" role="menuitem" tabindex="-1" id="menu-item-0">
                {option1}
            </a>
          )) }
</div>
  </div>)}
</div>
</div>
  </div>
        
        
        
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><div >
  <div class="relative inline-block text-left">
    <div>
    <button 
    onClick={electroClick}
    type="button" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Electronics
<svg class="-mr-1 ml-2 h-5 w-5"  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  {showOptions2 && (
<div class="absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1 pl-4" role="none">
     {options2 &&
          options2.map((options2)=>(
            <a href="#" class="text-gray-700 block  py-2 text-sm hover:bg-slate-300" role="menuitem" tabindex="-1" id="menu-item-0">
                {options2}
            </a>
          )) }
</div>
  </div>)}
</div>
</div>
</div>
<div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><button className='relative px-8 bg-white w-30 rounded-xl h-8'>Grocery</button></div>
        <div><img className='h-[150px] w-[150px] rounded-full' src='https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' /><button className='relative px-8 bg-white w-30 rounded-xl h-8'>Mobiles</button></div>


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