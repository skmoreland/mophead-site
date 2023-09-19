import { Link } from "react-router-dom";
import logo from "../../assets/images/MopheadLogo.png";
function NavBar(props) {
  var shadowColor = `${props.color}`
  var selectedPage = `${props.selectedPage}`
  var pageWidth = "w-32"
  const selectedPageList = {
    "home":"",
    "available-art":"",
    "archive":"",
    "shop":"",
    "contact":""
  }

  selectedPageList[selectedPage] = "text-teal-900"

  console.log(shadowColor)
  return (
      <nav className = {`w-screen h-32 flex justify-center items-center 
      sticky fixed z-50 top-0 z-999 font-title text-white  shadow-2xl ${shadowColor} 
      bg-gradient-to-r from-teal-600 via-orange-600 to-lime-300`}>
        <div className = "flex justify-center space-x-4 decoration-4 items-center underline-offset-4 lg:text-2xl text-center">
              <Link to="/" className={`hover:text-teal-900 ${pageWidth} ${selectedPageList["home"]}`}>About</Link>
              <Link to="/archive" className={`hover:text-teal-900 ${pageWidth} ${selectedPageList["archive"]}`}>Work Archive</Link>
              <div  >
                  <Link to="/">
                    <img
                      alt="Mophead"
                      src={logo}
                      className="w-40"
                    />
                  </Link>
              </div>
              <Link to="/shop" className={`hover:text-teal-900 ${pageWidth} ${selectedPageList["shop"]}`}>Shop</Link>
              <Link to="/contact" className={`hover:text-teal-900 ${pageWidth} ${selectedPageList["contact"]}`}>Contact</Link>
        </div>
      </nav>
  );
}

export default NavBar