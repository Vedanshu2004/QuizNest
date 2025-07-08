
import { Link } from 'react-router-dom';
import '../style/register.css'; 

function Register() {
  

  return (
    <div className="register-bg">
      <div className="register-container">
        <h1>Welcome to Quiznest !!</h1>
        <h1>Register Page</h1>
        <form>
          <div className="register-form-group">
            <label className="register-label" htmlFor="username">Username:</label>
            <input className="register-input" type="text" id="username" name="username" required />
          </div>
          <div className="register-form-group">
            <label className="register-label" htmlFor="email">Email:</label>
            <input className="register-input" type="email" id="email" name="email" required />
          </div>
          <div className="register-form-group">
            <label className="register-label" htmlFor="password">Password:</label>
            <input className="register-input" type="password" id="password" name="password" required />
          </div>
          <div className="register-form-group">
            <label className="register-label" htmlFor="role">Role:</label>
            <select className="register-input" id="role" name="role" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className="register-button" type="submit">Register</button>
        </form>
        <p className="register-link-text">Already have an account? <Link className="register-link" to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
