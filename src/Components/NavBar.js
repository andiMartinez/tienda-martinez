import { Link } from 'react-router-dom';
import CartWidget from '../extras/CartWidget';

const navbarMenu = [
  {
    id: 1,
    label: "web",
    path: "/categories/web"
  },
  {
    id: 2,
    label: "3d",
    path: "/categories/3d"
  },
  {
    id: 3,
    label: "mobile",
    path: "/categories/mobile"
  },
]

function NavBar() {
  return (
    <nav className="nav py-5 bg-black relative ">
      <div className="navbar container flex flex-wrap justify-between mx-auto align-middle">
        <Link to="/" className='nav text-gray-100 text-2xl' aria-current="page">andinov_</Link>
        <ul id="navbar" className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-mono text-white '>
          {navbarMenu.map((category) => (
            <li><Link to={category.path} key={category.id} className="flex items-center text-sm font-semibold text-white px-3 hover:text-yellow-500">{category.label}</Link></li>
          ))}
          <li><Link to="/cart" className='nav hover:text-yellow-500'><CartWidget /></Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar;
