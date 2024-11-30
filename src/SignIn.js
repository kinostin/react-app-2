import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (credentials.username === 'user' && credentials.password === 'password') {
      navigate('/dashboard', { state: { user: { name: 'John Doe', email: 'john@example.com', phone: '1234567890' } } });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;