import logo from '../assets/logo.png';
import '../style/navbar.css';
import '../style/homepage.css';

function Homepage() {

    
  return (
    <div className="homepage-container">
      
      <div className="nav-var">
        <img src={logo} alt="Quiznest Logo" className="logo" />
        <h3 className='title-navbar'> QUIZNEST </h3>
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Quizzes</a></li>
            <li><a href="/register">Leaderboard</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Profile</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Homepage;