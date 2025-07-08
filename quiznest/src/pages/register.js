import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/register.css'; 

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role })
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Registration successful! You can now login.');
        setUsername(''); setEmail(''); setPassword(''); setRole('user');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="register-bg">
      <div className="register-container">
        <h1>Welcome to Quiznest !!</h1>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label className="register-label" htmlFor="username">Username:</label>
            <input className="register-input" type="text" id="username" name="username" required value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="register-form-group">
            <label className="register-label" htmlFor="email">Email:</label>
            <input className="register-input" type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="register-form-group">
            <label className="register-label" htmlFor="password">Password:</label>
            <input className="register-input" type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="register-form-group">
            <label className="register-label" htmlFor="role">Role:</label>
            <select className="register-input" id="role" name="role" required value={role} onChange={e => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="register-button" type="submit">Register</button>
        </form>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
        <p className="register-link-text">Already have an account? <Link className="register-link" to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
