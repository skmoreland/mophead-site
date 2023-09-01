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
                    <NavBar color="shadow-indigo-900"/>
                    <Home/>
                </div>
            }/>
            <Route path="/available-art" element={
               <div>
                    <NavBar color="shadow-fuchsia-800"/>
                    <AvailableArt/>
                </div>
            }/>
            <Route path="/archive" element={
                <div>
                    <NavBar color="shadow-pink-500"/>
                    <Archive/>
                </div>
            }/>
            <Route path="/shop" element={
               <div>
                    <NavBar color="shadow-[#834D69]"/>
                    <Shop/>
                </div>
            }/>
            <Route path="/contact" element={
                <div>
                    <NavBar color="shadow-emerald-700"/>
                    <Contact/>
                </div>
            }/>
        </Routes>
    )
}

export default AppRouter;