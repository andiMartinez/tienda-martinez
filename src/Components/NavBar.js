import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="nav">
      <div id="navbar">
        <a id="logo">andinov_</a>
        <ul id="navbar" >
          <li><a href="#" class="nav" aria-current="page">Home</a></li>
          <li><a href="#" class="nav">LandingWEB</a></li>
          <li><a href="#" class="nav">Objetos3D</a></li>
          <li><a href="#" class="nav">MobileAPP</a></li>
          <li><a href="#" class="nav">
            <CartWidget />
          </a>
          </li>
        </ul>
      </div>
    </nav>);
}
export default NavBar;
