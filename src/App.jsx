import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
