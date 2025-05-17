import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';

import PostItem from './pages/PostItem';

import ValueAddedServices from './pages/ValueAddedServices';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-item" element={<PostItem />} />
        <Route path= "/value-added-services" element ={<ValueAddedServices/>}/>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
