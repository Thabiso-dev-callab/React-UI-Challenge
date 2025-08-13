import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import  ProductSection  from './components/ProductSection/ProductSection';
import  HolidaySection  from './components/HolidaySection/HolidaySection';
import Hero from './components/Hero/Hero';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Other sections will go here */}
    <Hero/>
       <ProductSection />
       <HolidaySection/>
       <Footer />
    </div>
  );
}

export default App;
