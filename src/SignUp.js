import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', { state: { user: form } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;