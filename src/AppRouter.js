import {Routes, Route} from "react-router-dom";

import HomePage from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={
                <HomePage/>
            }/>
            <Route path="/contact" element={
                <Contact/>
            }/>
        </Routes>
    )
}

export default AppRouter;