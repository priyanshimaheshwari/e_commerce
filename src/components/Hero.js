import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
      url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1611222777277-61319d63ca94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    },
    {
        url:'https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
    },
    {
        url:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60'
    },
  ];

const Hero = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length)
  
    const prevSlide = () => {
      setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    const nextSlide = () => {
      setSlide(slide === 0 ? length - 1 : slide - 1);
    };
  
    return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
        <BsArrowLeftSquareFill
          onClick={prevSlide}
          className='absolute top-[50%] text-3xl text-black cursor-pointer left-8'
        />
        <BsArrowRightSquareFill
          onClick={nextSlide}
          className='absolute top-[50%] text-3xl text-black cursor-pointer right-8'
        />
        {sliderData.map((item, index) => (
          <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (
              <img className='w-full rounded-md' src={item.url} alt='/' />
            )}
          </div>
        ))}
      </div>
    );
  };


export default Hero