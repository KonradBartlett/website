import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Home } from './pages/home';
import { Resume, Resume2 } from './pages/resume';
import { startScavenger } from './components/scavenger';
import { Background } from './components/background';
import { Portfolio } from './pages/portfolio';
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import { Footer } from './components/footer';

function App() {

  // Apply the cached theme on reload
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [isSolar, setSolar] = useState(localStorage.getItem('isSolar'));
  const [solarize, setSolarize] = useState(localStorage.getItem('isSolar') ? 'normalize' : 'solarize');
  const [modalOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if(theme != undefined){
      document.body.className = theme == 'light' ? 'light' : 'dark';
    } else {
      document.body.className = 'dark'
    }
    if(isSolar){
      document.body.className += ' solar';
    }
  },[])

  const darkButton = () => {
    document.body.className = isSolar ? 'dark solar' : 'dark';
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
  };
  
  const lightButton = () => {
    document.body.className = isSolar ? 'light solar' : 'light';
    setTheme('light');
    localStorage.setItem('theme', 'light');
  };
  
  const solarButton = () => {
    if (isSolar) {
      document.body.className = theme == 'light' ? 'light' : 'dark';
      setSolar(false);
      setSolarize('solarize');
      localStorage.removeItem('isSolar');
    } else {
      document.body.className = theme == 'light' ? 'light solar' : 'dark solar';
      setSolar(true);
      setSolarize('normalize');
      localStorage.setItem('isSolar', true);
    }
  };

  return (
    <Router>
      <section style={{'minHeight': '100vh'}}>
          <nav className="navbar">
              <ul className="navbar-nav">
              <h2 className="header">Konrad Bartlett</h2>
                  <Link className="nav-item" to="/">Home</Link>
                  <Link className="nav-item" to="/about">About</Link>
                  <Link className="nav-item" to="/resume">Resume</Link>
                  <Link  className="nav-item" to="/projects">Projects</Link>
                  <Link  className="nav-item" to="/portfolio">Portfolio</Link>
      
                  <div className="veritcal-row"></div>
                  <li className="nav-item has-dropdown">
                      <a href="#">Theme</a>
                      <ul className="dropdown">
                          <li className="dropdown-item"><a id="light" href="#" onClick={() => lightButton()}>light</a></li>
                          <li className="dropdown-item"><a id="dark"  href="#" onClick={() => darkButton()}>dark</a></li>
                          <li className="dropdown-item"><a id="solar" href="#" onClick={() => solarButton()}>{solarize}</a></li>
                      </ul>
                  </li>
                  <a  className="nav-item" href="#" onClick={() => {setModalIsOpen(true)}}>Hunt</a>
              </ul>
          </nav>
      
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/resume2">
              <Resume2 />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

      </section>
      <Footer />
      <Background/>
      <div className="fireworks" />
      <ReactModal isOpen={modalOpen}>
        <h3>Find all the <svg style={{height: '40px'}} viewBox="0 0 512 512"><path fill="currentcolor" d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path></svg> for a surprise! </h3>
        
                
        <button onClick={() => startScavenger()}>Ok</button>
      </ReactModal>
    </Router>
  );
}

export default App;
