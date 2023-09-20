import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";
import AvailableArt from "./pages/AvailableArt/AvailableArt";
import Shop from "./pages/Shop/Shop";
import Archive from "./pages/Archive/Archive";
import NavBar from "./components/NavBar/NavBar";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={
                <div>
                    <NavBar color="shadow-teal-800" selectedPage="home"/>
                    <Home/>
                </div>
            }/>
            <Route path="/available-art" element={
               <div>
                    <NavBar color="shadow-fuchsia-800" selectedPage="available-art"/>
                    <AvailableArt/>
                </div>
            }/>
            <Route path="/archive" element={
                <div>
                    <NavBar color="shadow-hotpink" selectedPage="archive"/>
                    <Archive/>
                </div>
            }/>
            <Route path="/shop" element={
               <div>
                    <NavBar color="shadow-rose-500" selectedPage="shop"/>
                    <Shop/>
                </div>
            }/>
            <Route path="/contact" element={
                <div>
                    <NavBar color="shadow-lime-300" selectedPage="contact"/>
                    <Contact/>
                </div>
            }/>
        </Routes>
    )
}

export default AppRouter;