import React, { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const BASE_URL = "http://localhost:1200/esikshya/api/v1/accounts/register";

  const handleRegister = () => {
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => console.log('User created:', data))
    .catch(error => console.error('Error creating user:', error));
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    if (user.password !== user.cpassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log(user);
    handleRegister();
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center primry-color'>
      <div className='h-[420px] w-80 px-6 my-4 bg-slate-800'>
        <div className=''>
          <h2 className='primary-color text-3xl font-bold pb-6 text-center mt-3'>SignUp</h2>
          <form className='flex flex-col items-center' action="" onSubmit={RegisterUser}>
            <div className='w-full relative'>
              <input
                className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent'
                name='username'
                placeholder='User Name'
                type="text"
                value={user.username || ""}
                onChange={handleChange}
              />
              <FaUser className='absolute top-[35%] right-3'/>
            </div>
            <div className='w-full relative'>
              <input
                className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent'
                name='email'
                placeholder='Email'
                type="email"
                value={user.email || ""}
                onChange={handleChange}
              />
              <MdMail className='absolute top-[35%] right-3'/>
            </div>
            <div className='w-full relative'>
              <input
                className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent'
                name='password'
                placeholder='Enter Password'
                type="password"
                value={user.password || ""}
                onChange={handleChange}
              />
              <FaLock className='absolute top-[35%] right-3'/>
            </div>
            <div className='w-full relative'>
              <input
                className='border border-gray-200 w-full rounded-full py-2 my-2 px-4 bg-transparent'
                name='cpassword'
                placeholder='Confirm Password'
                type="password"
                value={user.cpassword || ""}
                onChange={handleChange}
              />
              <FaLock className='absolute top-[35%] right-3'/>
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            <button
              className='items-center justify-center px-8 py-2 my-2 font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray'
              type="submit"
            >
              Register
            </button>
            <span>Already have an account? <button onClick={handleLogin}>Login</button></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
