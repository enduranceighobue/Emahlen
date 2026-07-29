import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;