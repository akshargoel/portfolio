import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header flex items-center justify-between px-4 py-2'>
      <NavLink to='/'>
        <img
          src={logo}
          alt='logo'
          className='w-10 h-10 object-contain rounded-xl shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300'
        />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};


export default Navbar;
