// import React , {useState} from 'react';
// import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const[nav , setNav] = useState(false)

//     const handleNav = () => {
//         setNav(!nav)
//     }
  
//     const navigate = useNavigate();

//     const handleLogin = () => {
//       navigate('/login');
//     };

//     const handleSignup = () => {
//       navigate('/signup');
//     };

//   return (
//     <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l' id='home'>

//         <h1 className='text-3xl font-bold primary-color ml-4'>E-Sikshya Madhyam</h1>
//         <ul className='hidden md:flex'>
//             <div className='p-5' class ="relative inline-flex group my-3 mx-5">
//                 <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
//                  <button onClick={handleLogin} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">Login</button>
//             </div>
//             <div className='p-5' class ="relative inline-flex group my-3 mx-5">
//                 <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
//                 <button onClick={handleSignup} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">SignUp</button>
//             </div>
//         </ul>

//         <div onClick={handleNav} className='block md:hidden'>
//             {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
//         </div>
//         <div className={ nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
//             <h1 className='text-3xl  primary-color m-4'>ESikshya Madhyam</h1>
//             <ul className='p-8 text-2xl'>
//                 <div className='p-2' class ="relative inline-flex group my-3 mx-5">
//                     <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
//                     <button onClick={handleLogin} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">Login</button>
//                 </div>
//                 <div className='p-2' class ="relative inline-flex group my-3 mx-5">
//                     <div class = "absolute transition-all duration-1000 opacity-70 -inset bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover: -inset-1 group-hover:duration-200 animate-tilt"></div>
//                     <button onClick={handleSignup} class =" relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray">Sign-UP</button>
//                 </div>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
          }

          .navbar-container {
            background: linear-gradient(90deg, #ff8a00, #e52e71);
            position: fixed;
            width: 100%;
            z-index: 10;
          }

          .nav-item {
            padding: 5px;
            position: relative;
            display: inline-flex;
            margin: 0 20px;
          }

          .nav-button {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 8px 16px;
            font-size: 1rem;
            font-weight: bold;
            color: blue;
            background-color: transparent;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
          }

          .nav-button:hover {
            color: #ff8a00;
          }

          .nav-mobile-menu {
            background-color: #202121;
          }

          .main-content {
            background: url('https://path/to/your/image.png') no-repeat center center;
            background-size: cover;
            width: 100%;
            height: 100vh;
            color: #FFAAAA;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
          }

          h1 {
            color: #2c3e50;
          }

          h2 {
            color: #16a085;
          }

          p {
            font-size: 1.2em;
            line-height: 1.5em;
            margin: 10px 0;
          }

          .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 1em;
            color: black;
            background-color: #16a085;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
          }
        `}
      </style>
      <div className='z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l' id='home'>
        <h1 className='text-3xl font-bold primary-color ml-4'>E-Sikshya Madhyam</h1>
        <ul className='hidden md:flex'>
          <li className='nav-item'>
            <button onClick={() => handleNavigate('/')} className='nav-button'>Home</button>
          </li>
          <li className='nav-item'>
            <button onClick={() => handleNavigate('/about')} className='nav-button'>About Us</button>
          </li>
          <li className='nav-item'>
            <button onClick={() => handleNavigate('/contact')} className='nav-button'>Contact Us</button>
          </li>
          <li className='p-5 relative inline-flex group my-3 mx-5'>
            <div className='absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
            <button onClick={handleLogin} className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray'>Login</button>
          </li>
          <li className='p-5 relative inline-flex group my-3 mx-5'>
            <div className='absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
            <button onClick={handleSignup} className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray'>Sign Up</button>
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='text-3xl primary-color m-4'>E-Sikshya Madhyam</h1>
          <ul className='p-8 text-2xl'>
            <li className='p-2 relative inline-flex group my-3 mx-5'>
              <div className='absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
              <button onClick={handleLogin} className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray'>Login</button>
            </li>
            <li className='p-2 relative inline-flex group my-3 mx-5'>
              <div className='absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
              <button onClick={handleSignup} className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray'>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="container">
          <h1>Welcome to e-Shiksha!</h1>
          <h2>Empowering Education, Enriching Lives</h2>
          <p>Discover a world of knowledge at your fingertips. e-Shiksha brings you innovative learning solutions designed to inspire and educate.</p>
          <h2>Why Choose e-Shiksha?</h2>
          <p><strong>Interactive Courses:</strong> Engaging and comprehensive content to make learning enjoyable.</p>
          <p><strong>Expert Instructors:</strong> Learn from the best in the field with real-world experience.</p>
          <p><strong>Flexible Learning:</strong> Access your courses anytime, anywhere, at your own pace.</p>
          <p><strong>Community Support:</strong> Join a community of learners and share your journey.</p>
          <a href="#" className="button">Start Learning Today!</a>
          <p>Unlock your potential with e-Shiksha and take the first step towards a brighter future.</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
