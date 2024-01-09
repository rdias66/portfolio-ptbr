import './App.css';
import React from 'react'
import Sidebar from './components/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';

const App = () => {
  return (
  <>
    <Sidebar />
    <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Contact />
    </main>
  </>
  )
}

export default App