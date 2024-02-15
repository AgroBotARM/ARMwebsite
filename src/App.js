import React from "react";
import {
    Navbar
} from "./components";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {
    Home,
    Portfolio,
    Sponsorship,
    Recruitment,
    ContactUs,
    AboutUs,
    AgroPonics,
} from "./pages";

import {
    Footer
} from "./components/common";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/sponsorship" element={<Sponsorship />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/agroponics" element={<AgroPonics />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;