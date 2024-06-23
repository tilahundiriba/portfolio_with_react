
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import About from './components/About/About.js';
import Works from './components/Works/Works.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Intro />
      <About />
      <Works />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
