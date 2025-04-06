import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import BannerDetails from "./components/bannerDetails/BannerDetails";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Blogs from "./components/blogs/blogs";
import Footer from "./components/footer/Footer";
import VerifiedContentCreator from "../src/components/pages/VerifiedContentCreator.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <Router>
            <div className="dark:bg-gray-900 bg-white">
                <Navbar />
                <Hero />
                <OverviewCounter />
                <BannerDetails />
                <SimpleBanner />
                <Routes>
                    <Route path="/" element={<Blogs />} />
                    <Route path="/verified-content-creator" element={<VerifiedContentCreator />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
