import { Link } from "react-router-dom";
const NavBar = () => {
  return (
      <nav className = "bg-black w-screen h-16 flex justify-between items-center px-4 font-marker text-white">
        <div className = "text-2xl lg:text-3xl" >
            <Link to="/">Mophead Art</Link>
        </div>
        <div className = "flex justify-between gap-x-4 decoration-4 underline-offset-4 lg:text-xl">
              <Link to="/" className="decoration-prime-red hover:underline hover:underline">About Me</Link>
              <Link to="/contact" className="decoration-prime-yellow hover:underline">Contact</Link>
        </div>
              {/* <h1>About</h1>
              <h1>Available Artwork</h1>
              <h1>Shop</h1>
              <h1>Work Archive</h1>
              <h1>Contact</h1> */}
      </nav>
  );
}

export default NavBar