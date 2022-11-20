import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/NavgationBar';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <header className="App-header">
        <Navbar />
        <Home />
        </header>
        <About />
        <Profile />
        <Projects />
        <Footer />
    </div>
  );
}

export default App;
