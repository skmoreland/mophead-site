import { Link } from "react-router-dom";
import React, { useState} from "react";
import logo from "../../assets/images/MopheadLogo.png";
function NavBar(props) {
  const [navOpen, setNavOpen] = useState(false);
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
      <nav className = {`w-screen 
      shadow-2xl ${shadowColor} 
      bg-gradient-to-r from-darkteal via-hotpink to-neonlime
      font-title text-white
      `
      }>
        <section className="hidden 
        lg:h-32 
        lg:flex lg:justify-center lg:items-center 
        lg:sticky lg:fixed lg:z-50 lg:top-0 lg:z-999 
        ">
          <div className = {`flex justify-center items-center space-x-4 
          decoration-4 underline-offset-4 
          lg:text-2xl text-center`
          }>
                <Link to="/" className={`hover:text-neutral-700 ${pageWidth} ${selectedPageList["home"]}`}>ABOUT</Link>
                <Link to="/archive" className={`hover:text-neutral-700 ${pageWidth} ${selectedPageList["archive"]}`}>WORK ARCHIVE</Link>
                <div  >
                    <Link to="/">
                      <img
                        alt="Mophead"
                        src={logo}
                        className="w-40"
                      />
                    </Link>
                </div>
                <Link to="/shop" className={`hover:text-neutral-700 ${pageWidth} ${selectedPageList["shop"]}`}>SHOP</Link>
                <Link to="/contact" className={`hover:text-neutral-700 ${pageWidth} ${selectedPageList["contact"]}`}>CONTACT</Link>
          </div>
        </section>
        <section className="lg:hidden p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl"> Mophead Art</h1>
            <div className="HAMBURGER-ICON space-y-2"
              onClick={() => setNavOpen((navOpen) => !navOpen)} // toggle isNavOpen state on click
            >
              <span className="block rounded h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block rounded h-0.5 w-8 animate-pulse bg-black"></span>
              <span className="block rounded h-0.5 w-8 animate-pulse bg-black"></span>
            </div>  
          </div>
            {navOpen && (
              <div>
                <div className = {`
                items-center space-y-4 pt-4
                grid rows-4
                decoration-4 underline-offset-4 
                text-xl text-center`
                }>
                      <Link to="/" className={`hover:text-gray-700 ${selectedPageList["home"]}`}>ABOUT</Link>
                      <Link to="/archive" className={`hover:text-gray-700 ${selectedPageList["archive"]}`}>WORK ARCHIVE</Link>
                      <Link to="/shop" className={`hover:text-gray-700 ${selectedPageList["shop"]}`}>SHOP</Link>
                      <Link to="/contact" className={`hover:text-gray-700 ${selectedPageList["contact"]}`}>CONTACT</Link>
                </div>
              </div>
            )}
            
        </section>
      </nav>
  );
}

export default NavBar