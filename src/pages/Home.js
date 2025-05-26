import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Sketch from '../components/Sketch';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <section id="upload">
        <Sketch />
      </section>
      <About />
      <Footer />
    </>
  );
};

export default Home;
