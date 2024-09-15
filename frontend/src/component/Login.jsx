import { useState } from 'react';
import axios from 'axios';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  
  const submit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const { data } = await axios.post('http://localhost:8000/auth/token/', { username, password });
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      window.location.href = '/';
    } catch (error) {
      
      setError(true);
    }
  };



  return (
    <div className="auth-form-container">
      <form className="auth-form" onSubmit={submit}>
        <h3>Sign In</h3>
        <div className="form-group">
          <label>Username</label>
          <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
        {error && <p className="para">Invalid credentials</p>}
      </form>
    </div>
  );
};
