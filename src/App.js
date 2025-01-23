import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Resourses from './screens/Resources';
import OurWork from './screens/OurWork';
import Consultancy from './screens/Consultancy';

function App() {
  return (
   <div>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About /> } />
        <Route path='/products' element={<Contact />} />
        <Route path='/resources' element={<Resourses />} />
        <Route path='/ourwork' element={<OurWork />} />
        <Route paht='/consultancy' element={<Consultancy />} />
      </Routes>
      <Footer />
    </Router>
   </div>
  );
}

export default App;
