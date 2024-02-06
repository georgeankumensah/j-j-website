import { useLayoutEffect } from 'react';
import { Routes, Route,useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";



const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [location.pathname]);
  return children
} 

function App() {

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
