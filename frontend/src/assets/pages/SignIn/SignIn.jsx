import { Input, Button } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { signInStart, signInSuccess, signInFailure} from '../../../redux/user/userSilce'
import { useDispatch, useSelector } from 'react-redux';
import OAuthButton from '../../components/OAuthButton/OAuthButton';
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import { app } from '../../../firbase';

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
          onClose: () =>  {
             navigate('/')
             const userData = response.data.data
             dispatch(signInSuccess(userData))
            }
        });
        
      
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
       dispatch(signInFailure(error?.response?.data?.message))
    }

  };

  const handleAuthGoogle = async (e)=>{
    dispatch(signInStart())
    try{
     const provider = new GoogleAuthProvider()
     const auth = getAuth(app)
     const {user} = await signInWithPopup(auth,provider)
     const userData = {
      name:user.displayName,
      email:user.email,
      photo:user.photoURL
     }
     const res = await axios.post('http://localhost:3000/api/auth/google',JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const {message,data} = res?.data

    toast.success(`${message}, Redirecting to home...`,{
      onClose: () =>  {
        dispatch(signInSuccess(data))
        navigate('/')
        }
    });
     
    }catch(error){
      toast.error(error?.response?.data?.message);
      dispatch(signInFailure(error?.response?.data?.message))
    }
  }

  return (
    <>
    <div className="max-w-md  mx-auto p-6  rounded-md mt-8 shadow-xl bg-gradient-to-br from-cyan-200 to-fuchsia-400">
      <div className="text-2xl text-center font-semibold mb-4">Sign In</div>
      <form className='flex gap-3 flex-col mt-10' onSubmit={handleSubmit}>
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
       <OAuthButton  isDisabled={loading} onClick={handleAuthGoogle} />
        </div>
      </form>
      <p className="text-sm text-gray-600 text-center">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
    </div>
          </>
  );
}