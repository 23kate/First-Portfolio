import React, { useState } from 'react';
import heroImg from '../assets/hero.svg';
import backgroundImg from '../assets/background.jpg'; 

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='relative bg-[#8d1e1ed7] py-24 overflow-hidden'>
      {}
      <div className='absolute inset-0 z-[-1]'>
        <img
          src={backgroundImg}
          alt='Background'
          className='w-full h-full object-cover opacity-50'
        />
      </div>

      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Kristel</h1>
          <p className='mt-4 text-2xl text-[#FFD700] capitalize tracking-wide'>
            BS-Information Technology
          </p>
          <p className='mt-2 text-lg text-[#FFD700] capitalize tracking-wide'>
            Focused on enhancing IT projects through meticulous management, documentation, and teamwork
          </p>
          <div className='flex gap-x-4 mt-4'>
            {}
            <button 
              onClick={() => window.open('https://carungay.my.canva.site/', '_blank')}
              className='bg-[#FFD700] text-[#8d1e1ed7] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300'>
              View My Resume
            </button>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' alt='Hero Image' />
        </article>
      </div>

      {}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-8 rounded-lg relative'>
            <button 
              onClick={closeModal} 
              className='absolute top-2 right-2 text-black text-2xl font-bold'>
              &times;
            </button>
            {/* The iframe code has been removed since we're opening the resume in a new tab */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
