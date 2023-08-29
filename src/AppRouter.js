import {Routes, Route} from "react-router-dom";

import HomePage from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";
import AvailableArt from "./pages/AvailableArt/AvailableArt";
import Shop from "./pages/Shop/Shop";
import Archive from "./pages/Archive/Archive";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={
                <HomePage/>
            }/>
            <Route path="/available-art" element={
                <AvailableArt/>
            }/>
            <Route path="/contact" element={
                <Contact/>
            }/>
            <Route path="/shop" element={
                <Shop/>
            }/>
            <Route path="/archive" element={
                <Archive/>
            }/>
        </Routes>
    )
}

export default AppRouter;