import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg bg-gradient-to-r from-cyan-200 to-blue-500">
      <div>
        <img 
         className="p-2 w-36 h-30 m-2"
         src={LOGO_URL} alt="Logo" 
        />

        
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">Our Programs</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className=" px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full">
            <button className="log-btn ">Apply Now</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header