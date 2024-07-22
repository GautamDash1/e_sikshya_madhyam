import React from 'react'
import { FaLock, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/login');
    };

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center primry-color'>
      <div className='h-[350px] w-80 px-6 my-4 bg-slate-800'>
       <div className=''>
          <h2 className='primary-color text-3xl font-bold pb-6 text-center mt-3'>SignUp</h2>
          <form className='flex flex-col items-center' action="">
            <div className='w-full relative'>
              <input className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='User Name' type="text" />
              <FaUser className='absolute top-[35%] right-3'/> 
            </div> 
            <div className='w-full relative'> 
              <input className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='Email' type="email" />
              <MdMail className='absolute top-[35%] right-3'/> 
            </div> 
            <div className='w-full relative'> 
              <input className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent' placeholder='Password' type="password" />
              <FaLock className='absolute top-[35%] right-3'/>
            </div>
            <button className='items-center justify-center px-8 py-2 my-2 font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-full focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray'>Register</button>
            <span>Already have an account ? <button onClick={handleLogin}>Login</button></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
