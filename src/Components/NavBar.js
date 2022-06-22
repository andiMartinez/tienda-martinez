

function NavBar() {
  return (
    <nav className="nav">
      <nav class="py-1 bg-black w-screen">
        <div class="container flex justify-between  bg-black p-4 ">
          <a class="text-white ml-14">andinov_</a>
            <ul class="flex flex-col md:flex-row md:space-x-8  md:text-sm md:font-mono text-white">
              <li>
                <a href="#" class="md:hover:text-yellow-400">search</a>
              </li>
              <li>
                <a href="#" class="md:hover:text-yellow-400">landing-web</a>
              </li>
              <li>
                <a href="#" class=" md:hover:text-yellow-400">objetos-3D</a>
              </li>
              <li>
                <a href="#" class=" md:hover:text-yellow-400">mobile-apps</a>
              </li>
              <li>
                <a href="#" class=" md:hover:text-yellow-400">shopping-cart
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </nav>);
}
export default NavBar;
