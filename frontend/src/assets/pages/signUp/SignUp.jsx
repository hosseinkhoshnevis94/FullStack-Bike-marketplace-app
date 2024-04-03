import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react';
import {Link} from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md  mx-auto p-6 rounded-md mt-14 shadow-xl bg-gradient-to-br from-cyan-200 to-fuchsia-400">
      <div className="text-2xl text-center font-semibold mb-4">Sign Up</div>
      <form className='flex gap-6 flex-col mt-10' onSubmit={handleSubmit}>
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
        <div className="text-center mt-3 mb-6">
          <Button type="submit" variant="shadow" color="primary">Sign Up</Button>
        </div>
      </form>
      <p className="text-sm text-gray-600 text-center">Already have an account? <Link to="/signin" className="text-blue-500">Login</Link></p>
    </div>
  );
}
