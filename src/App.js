import React from 'react';
import LandingPage from './LandingPage';
import Footer from './components/Footer';
import Login from './pages/Login';
import Blog from './pages/Blog';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      {/* You can add Footer here if you want it to appear on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
