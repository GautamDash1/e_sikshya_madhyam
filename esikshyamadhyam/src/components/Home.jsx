import React , {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const[nav , setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  
    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/login');
    };
  
    const handleSignup = () => {
      navigate('/signup');
    };

  return (
    <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l' id='home'>

        <h1 className='text-3xl font-bold primary-color ml-4'>E-Sikshya Madhyam</h1>
        <ul className='hidden md:flex'>
            <div className='p-5' class ="relative inline-flex group my-3 mx-5">
                <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
                 <button onClick={handleLogin} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">Login</button>
            </div>
            <div className='p-5' class ="relative inline-flex group my-3 mx-5">
                <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
                <button onClick={handleSignup} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">SignUp</button>
            </div>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={ nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='text-3xl  primary-color m-4'>ESikshya Madhyam</h1>
            <ul className='p-8 text-2xl'>
                <div className='p-2' class ="relative inline-flex group my-3 mx-5">
                    <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button onClick={handleLogin} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">Login</button>
                </div>
                <div className='p-2' class ="relative inline-flex group my-3 mx-5">
                    <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button onClick={handleSignup} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">Sign-UP</button>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
