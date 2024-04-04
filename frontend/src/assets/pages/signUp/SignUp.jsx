import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import {  toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import OAuthButton from '../../components/OAuthButton/OAuthButton';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const{loading , error} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      if(response.status===201){
        setFormData({})
        toast.success(response.data.message +' Redirecting to home...',{
          onClose: () => {
            const userData = response.data.data
            dispatch(signInSuccess(userData))
            navigate('/')

          } 
        });
      
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      dispatch(signInFailure(error?.response?.data?.message))
    }
  
  };
  

  return (
    <div className="max-w-md  mx-auto p-6 rounded-md mt-8 shadow-xl bg-gradient-to-br from-cyan-200 to-fuchsia-400">
      <div className="text-2xl text-center font-semibold mb-4">Sign Up</div>
      <form className='flex gap-3 flex-col mt-10' onSubmit={handleSubmit}>
        <Input
          label="Username"
          id="username"
          value={formData.username}
          onChange={(e) => handleChange('username', e.target.value)}
          required
        />
        <Input
          type="email"
          label="Email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          required
        />
        <Input
          type="password"
          label="Password"
          id="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          required
        />
        <div className="text-center flex flex-col gap-2 items-center justify-center  mt-3 mb-6">
        <Button type="submit" className='w-[50%]' variant="shadow" color="primary" isDisabled={loading} isLoading={loading} >{loading ? 'Loading...' :  'Login'}</Button>
        <div>or</div>
        <OAuthButton/>
        </div>
      </form>
      <p className="text-sm text-gray-600 text-center">Already have an account? <Link to="/signin" className="text-blue-500">Login</Link></p>
    </div>
  );
}
