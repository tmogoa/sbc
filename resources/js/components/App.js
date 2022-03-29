import React from "react";
import ReactDOM from "react-dom";
import Login from "./screens/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./screens/Register";
import Home from "./screens/Home";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import RegisterBoy from "./screens/RegisterBoy";
import Activities from "./screens/Activities";
import BoysCorner from "./screens/BoysCorner";
import PageWideSpinner from "./widgets/PageWideSpinner";
import { AppContextProvider } from "./util/AppContext";

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <PageWideSpinner hidden={true} />
                <Routes>
                    <Route path="/adminlogin" element={<Login />} />
                    <Route path="/adminregister" element={<Register />} />
                    <Route path="/register-boy" element={<RegisterBoy />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/boys-corner" element={<BoysCorner />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
