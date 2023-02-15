import React from 'react';

const NavBar = () => {

  return (

    <nav className="bg-gray-800 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">My Website</a>
        <ul className="flex">
          <li className="mr-6">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li className="mr-6">
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;