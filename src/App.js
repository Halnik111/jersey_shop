import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menu = () => {
        if (openMenu) {
            return <NavbarMenu setOpenMenu={setOpenMenu}/>
        }
    }

    return (
        <HashRouter>
            <div className={'app'}>
                <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                {menu()}
                <div className={"wrapper"}>
                    <Routes>
                        <Route path={"/"}>
                            <Route index element={<Home />} />
                            <Route path={'shop'}>
                                <Route path={'nfl'} element={<Shop type={'NFL'}/>} />
                                <Route path={'nhl'} element={<Shop type={'NHL'}/>} />
                                <Route path={'mlb'} element={<Shop type={'MLB'}/>} />
                            </Route>
                            <Route path={'item'}>
                                <Route path={':id'} element={<Item />} />
                            </Route>
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;

