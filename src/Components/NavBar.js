import { Link } from 'react-router-dom';
import CartWidget from '../extras/CartWidget';

function NavBar() {
  return (
    <nav className="nav">
      <div id="navbar">
      <Link to="/" className='nav text-gray-100 text-2xl' aria-current="page">andinov_</Link>
        <ul id="navbar">
          <li><Link to="/" className='nav' aria-current="page">Home</Link></li>
          <li><Link to="/categories/LandingWEB" className='nav'>LandingWEB</Link></li>
          <li><Link to="/categories/Objetos3D"className='nav'>Objetos3D</Link></li>
          <li><Link to="/categories/MobileAPP" className='nav'>MobileAPP</Link></li>
          <li><Link to="/cart" className='nav'><CartWidget/></Link>
          </li>
        </ul>
      </div>
    </nav>);
}
export default NavBar;
