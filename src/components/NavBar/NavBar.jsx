import { Link } from "react-router-dom";

function NavBar(props) {
  var shadowColor = `${props.color}`
  var selectedPage = `${props.selectedPage}`

  const selectedPageList = {
    "home":"",
    "available-art":"",
    "archive":"",
    "shop":"",
    "contact":""
  }

  selectedPageList[selectedPage] = "text-indigo-900"

  console.log(shadowColor)
  return (
      <nav className = {`w-screen h-20 flex justify-between items-center px-4 
      sticky fixed z-50 top-0 z-999 font-title text-white shadow-2xl ${shadowColor} 
      bg-gradient-to-r from-indigo-900 via-pink-500 to-emerald-700`}>
        <div className = "text-2xl lg:text-3xl" >
            <Link to="/">Mophead Art</Link>
        </div>
        <div className = "flex justify-between space-x-12 px-4 decoration-4 underline-offset-4 lg:text-xl">
              <Link to="/" className={`hover:text-indigo-900 ${selectedPageList["home"]}`}>About</Link>
              <Link to="/available-art" className={`hover:text-indigo-900 ${selectedPageList["available-art"]}`}>Available Artwork</Link>
              <Link to="/archive" className={`hover:text-indigo-900 ${selectedPageList["archive"]}`}>Work Archive</Link>
              <Link to="/shop" className={`hover:text-indigo-900 ${selectedPageList["shop"]}`}>Shop</Link>
              <Link to="/contact" className={`hover:text-indigo-900 ${selectedPageList["contact"]}`}>Contact</Link>
        </div>
      </nav>
  );
}

export default NavBar