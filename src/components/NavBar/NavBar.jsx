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

  selectedPageList[selectedPage] = "text-black"

  console.log(shadowColor)
  return (
      <nav className = {`w-screen h-32 
      flex justify-center items-center 
      sticky fixed z-50 top-0 z-999 
      font-title text-white 
      shadow-2xl ${shadowColor} 
      bg-gradient-to-r from-darkteal via-hotpink to-neonlime`
      }>
        <div className = {`flex justify-center items-center space-x-4 
        decoration-4 underline-offset-4 
        lg:text-2xl text-center`
        }>
              <Link to="/" className={`hover:text-gray-700 ${pageWidth} ${selectedPageList["home"]}`}>ABOUT</Link>
              <Link to="/archive" className={`hover:text-gray-700 ${pageWidth} ${selectedPageList["archive"]}`}>WORK ARCHIVE</Link>
              <div  >
                  <Link to="/">
                    <img
                      alt="Mophead"
                      src={logo}
                      className="w-40"
                    />
                  </Link>
              </div>
              <Link to="/shop" className={`hover:text-gray-700 ${pageWidth} ${selectedPageList["shop"]}`}>SHOP</Link>
              <Link to="/contact" className={`hover:text-gray-700 ${pageWidth} ${selectedPageList["contact"]}`}>CONTACT</Link>
        </div>
      </nav>
  );
}

export default NavBar