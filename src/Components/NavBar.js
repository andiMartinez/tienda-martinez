import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="nav">
      <div id="navbar">
        <a id="logo">andinov_</a>
        <ul id="navbar" >
          <li><a href="/" className='nav' aria-current="page">Home</a></li>
          <li><a href="/" className='nav'>LandingWEB</a></li>
          <li><a href="/" className='nav'>Objetos3D</a></li>
          <li><a href="/" className='nav'>MobileAPP</a></li>
         <li><a href="/"  className='nav'>
            <CartWidget />
          </a>
          </li>
        </ul>
      </div>
    </nav>);
}
export default NavBar;
