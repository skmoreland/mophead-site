import { Link } from "react-router-dom";
const NavBar = () => {
  return (
      <nav className = "w-screen h-20 flex justify-between items-center px-4 font-marker text-white bg-gradient-to-r from-indigo-900 via-pink-500 to-emerald-700">
        <div className = "text-2xl lg:text-3xl" >
            <Link to="/">Mophead Art</Link>
        </div>
        <div className = "flex justify-between space-x-12 px-4 decoration-4 underline-offset-4 lg:text-xl">
              <Link to="/" className="decoration-prime-red hover:underline hover:underline">About</Link>
              <Link to="/available-art" className="decoration-prime-red hover:underline hover:underline">Available Artwork</Link>
              <Link to="/shop" className="decoration-prime-red hover:underline hover:underline">Shop</Link>
              <Link to="/archive" className="decoration-prime-red hover:underline hover:underline">Work Archive</Link>
              <Link to="/contact" className="decoration-prime-yellow hover:underline">Contact</Link>
        </div>
      </nav>
  );
}

export default NavBar