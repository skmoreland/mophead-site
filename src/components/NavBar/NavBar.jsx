import { Link } from "react-router-dom";

function NavBar(props) {
  var shadowColor = `${props.color}`
  console.log(shadowColor)
  return (
      <nav className = {`w-screen h-20 flex justify-between items-center px-4 font-title text-white shadow-2xl ${shadowColor} bg-gradient-to-r from-indigo-900 via-pink-500 to-emerald-700`}>
        <div className = "text-2xl lg:text-3xl" >
            <Link to="/">Mophead Art</Link>
        </div>
        <div className = "flex justify-between space-x-12 px-4 decoration-4 underline-offset-4 lg:text-xl">
              <Link to="/" className="hover:text-indigo-900">About</Link>
              <Link to="/available-art" className="hover:text-indigo-900">Available Artwork</Link>
              <Link to="/archive" className="hover:text-indigo-900">Work Archive</Link>
              <Link to="/shop" className="hover:text-indigo-900">Shop</Link>
              <Link to="/contact" className="hover:text-indigo-900">Contact</Link>
        </div>
      </nav>
  );
}

export default NavBar