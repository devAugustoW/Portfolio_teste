import './App.css'
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollUp from './components/ScrollUp/ScrollUp.jsx';


function App() {
  

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App
