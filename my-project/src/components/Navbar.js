import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav

  
      className='flex justify-center items-center h-16  relative font-mono top-3'
      role='navigation'>
    
       

      <div className='pr-15 md:'>
        <Link to='/' className='p-6'>
          Home
        </Link>
        <Link to='/menu' className='p-6'>
          Menu
        </Link>
        <Link to='/about' className='p-6'>
          About
        </Link>
        <Link to='/contact' className='p-6'>
          Contact
        </Link>
        <Link to='/contact' className='p-6'>
        <a href="#" class="bg-red-500 hover:bg-red-700 text-white text-center py-3 px-3 rounded-full">
         Get Started
        </a>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
