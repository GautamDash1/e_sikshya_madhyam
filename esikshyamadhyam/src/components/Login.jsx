import React , { useState }  from 'react'
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value })
    }

  const LoginUser = (e) => {
    e.preventDefault();
    console.log(user);
    }
  const navigate = useNavigate();
  
  const handleSignup = () => {
      navigate('/signup');
    };

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center primry-color'>
      <div className='h-[300px] w-80 px-6 my-4 bg-slate-800'>
       <div className=''>
          <h2 className='primary-color text-3xl font-bold pb-6 text-center mt-3'>Login</h2>
          <form className='flex flex-col items-center' action="" onSubmit={LoginUser}> 
            <div className='w-full relative'> 
              <input className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent' name ='email' placeholder='Email' type="email" onChange={handleChange}/>
              <MdMail className='absolute top-[35%] right-3'/> 
            </div> 
            <div className='w-full relative'> 
              <input className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent' name='password' placeholder='Password' type="password" onChange={handleChange}/>
              <FaLock className='absolute top-[35%] right-3'/>
            </div>
            <button className='items-center justify-center px-8 py-2 my-2 font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-full focus:outline-none focus: ring-2 focus:ring-offset-2 focus:ring-gray'>Login</button>
            <span>Don't have an account ? <button onClick={handleSignup}>Register</button></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
