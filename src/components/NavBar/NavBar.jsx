import { Link } from "react-router-dom";
import logo from "../../assets/images/MopheadLogo.png";
import cart from "../../assets/images/Cart2.svg";
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

  selectedPageList[selectedPage] = "text-teal-800"

  console.log(shadowColor)
  return (
      <nav className = {`w-screen h-32 flex justify-center items-center px-4 
      sticky fixed z-50 top-0 z-999 font-title text-white shadow-2xl ${shadowColor} 
      bg-gradient-to-r from-teal-800 via-orange-600 to-lime-300`}>
        <div className = "flex justify-center space-x-12 px-4 decoration-4 items-center underline-offset-4 lg:text-xl">
              <Link to="/" className={`hover:text-teal-900 w-16 ${selectedPageList["home"]}`}>About</Link>
              <Link to="/available-art" className={`hover:text-teal-900 w-16 ${selectedPageList["available-art"]}`}>Available Artwork</Link>
              <Link to="/archive" className={`hover:text-teal-900 w-16 ${selectedPageList["archive"]}`}>Work Archive</Link>
              <div className = "place-self-center" >
                  <Link to="/">
                    <img
                      alt="Mophead"
                      src={logo}
                      className="w-40 place-self-center"
                    />
                  </Link>
              </div>
              <Link to="/shop" className={`hover:text-teal-900 w-16 ${selectedPageList["shop"]}`}>Shop</Link>
              <Link to="/contact" className={`hover:text-teal-900 w-16 ${selectedPageList["contact"]}`}>Contact</Link>
              <div 
                className="w-16"
              >
                <img
                  alt="cart"
                  src={cart}
                />
              </div>
        </div>
      </nav>
  );
}

export default NavBar