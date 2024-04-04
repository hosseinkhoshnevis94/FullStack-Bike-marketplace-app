import { Input, Button } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { signInStart, signInSuccess, signInFailure} from '../../../redux/user/userSilce'
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const [formData, setFormData] = useState({
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
    dispatch(signInStart())
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      if(response.status===200){
        setFormData({})
        toast.success(response.data.message +' Redirecting to home...',{
          onClose: () =>   navigate('/')
        });
        const userData = response.data.data
        dispatch(signInSuccess(userData))
      
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
       dispatch(signInFailure(error?.response?.data?.message))
    }

  };

  return (
    <div className="max-w-md  mx-auto p-6  rounded-md mt-16 shadow-xl bg-gradient-to-br from-cyan-200 to-fuchsia-400">
      <div className="text-2xl text-center font-semibold mb-4">Sign In</div>
      <form className='flex gap-6 flex-col mt-10' onSubmit={handleSubmit}>
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
        <div className="text-center mt-3 mb-6">
        <Button type="submit" variant="shadow" color="primary" isDisabled={loading} isLoading={loading} >{loading ? 'Loading...' :  'Login'}</Button>
        </div>
      </form>
      <p className="text-sm text-gray-600 text-center">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
    </div>
  );
}