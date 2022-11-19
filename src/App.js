import React from 'react';

import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {FiSettings} from "react-icons/fi";
import {Navbar, Payment, Sidebar, ThemeSettings} from "./components";
import {
    Ecommerce
} from "./pages";
import {useStateContext} from "./contexts/ContextProvider";

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();


    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-3xl
                          hover:bg-light-gray text-white" style={{background: currentColor, borderRadius: '50%'}}
                                    onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                        ${activeMenu 
                            ? 'md:ml-72' 
                            : 'flex-2'}`
                    }>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar/>
                        </div>

                        <div>

                            {themeSettings && <ThemeSettings/>}

                            <Routes>
                                {/* Dashboard */}
                                <Route path="/" element={<Ecommerce/>}/>
                                <Route path="/dashboard" element={<Ecommerce/>}/>

                                {/* Pages */}
                                <Route path="/driving-license" element={<Payment/>}/>
                                <Route path="/banklogs" element={<Payment/>}/>
                                <Route path="/cashapp" element={<Payment/>}/>
                                <Route path="/sauce" element={<Payment/>}/>

                                {/* Apps */}
                                <Route path="/ssn-search" element={<Payment/>}/>
                                <Route path="/loader" element={<Payment/>}/>
                                <Route path="/cc-checker" element={<Payment/>}/>
                                <Route path="/discussions" element={<Payment/>}/>

                                {/* Others */}
                                <Route path="/giveaways" element={<Payment/>}/>
                                <Route path="/news&announcements" element={<Payment/>}/>
                                <Route path="/paypal" element={<Payment/>}/>
                                <Route path="/credit-cards" element={<Payment/>}/>
                                <Route path="/free-vpn" element={<Payment/>}/>
                                <Route path="/escrow" element={<Payment/>}/>
                                <Route path="/about-us" element={<Payment/>}/>
                                <Route path="/report-a-bug" element={<Payment/>}/>

                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
