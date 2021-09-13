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
import {ReactComponent as Bird} from './assets/bird.svg';

function App() {

  // Apply the cached theme on reload
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [isSolar, setSolar] = useState(localStorage.getItem('isSolar'));
  const [solarize, setSolarize] = useState(localStorage.getItem('isSolar') ? 'normalize' : 'solarize');
  const [modalOpen, setModalIsOpen] = useState(false);
  const [themeText, setThemeText] = useState(localStorage.getItem('theme')  == 'light' ? '🌙' : '🌤️')

  useEffect(() => {
    if(theme != undefined){
      document.body.className = theme == 'light' ? 'light' : 'dark solar';
    } else {
      document.body.className = 'dark solar'
    }
    // if(isSolar){
    //   document.body.className += ' solar';
    // }
  },[])

  const toggleTheme = () => {
    const newTheme = theme == 'light' ? 'dark solar' : 'light'
    setTheme(theme == 'light' ? 'dark solar' : 'light');
    setThemeText(theme == 'light' ? '🌤️':  '🌙');
    localStorage.setItem('theme', theme == 'light' ? 'dark solar' : 'light');
    document.body.className = theme == 'light' ? 'dark solar' : 'light';
  }

  // const darkButton = () => {
  //   document.body.className = isSolar ? 'dark solar' : 'dark';
  //   setTheme('dark');
  //   localStorage.setItem('theme', 'dark');
  // };
  
  // const lightButton = () => {
  //   document.body.className = isSolar ? 'light solar' : 'light';
  //   setTheme('light');
  //   localStorage.setItem('theme', 'light');
  // };
  
  // const solarButton = () => {
  //   if (isSolar) {
  //     document.body.className = theme == 'light' ? 'light' : 'dark';
  //     setSolar(false);
  //     setSolarize('solarize');
  //     localStorage.removeItem('isSolar');
  //   } else {
  //     document.body.className = theme == 'light' ? 'light solar' : 'dark solar';
  //     setSolar(true);
  //     setSolarize('normalize');
  //     localStorage.setItem('isSolar', true);
  //   }
  // };

  return (
    <Router>
      <section style={{'minHeight': '100vh'}}>
          <nav className="navbar">
              <ul className="navbar-nav">
              <h2 className="header">Konrad Bartlett</h2>
                  <Link className="nav-item dark_hover" to="/">Home</Link>
                  <Link className="nav-item dark_hover" to="/about">About</Link>
                  <Link className="nav-item dark_hover" to="/resume">Resume</Link>
                  <Link className="nav-item dark_hover" to="/projects">Projects</Link>
                  {/* <Link className="nav-item dark_hover" to="/portfolio">Portfolio</Link> */}
      
                  <div className="veritcal-row"></div>
                  <li className="nav-item dark_hover has-dropdown" title="Toggle theme" onClick={toggleTheme}>
                      <a href="#">{themeText}</a>
                      {/* <ul className="dropdown">
                          <li className="dropdown-item"><a id="light" href="#" onClick={() => lightButton()}>light</a></li>
                          <li className="dropdown-item"><a id="dark"  href="#" onClick={() => darkButton()}>dark</a></li>
                          <li className="dropdown-item"><a id="solar" href="#" onClick={() => solarButton()}>{solarize}</a></li>
                      </ul> */}
                  </li>
                  <a  className="nav-item dark_hover" href="#" onClick={() => {setModalIsOpen(true)}}><Bird/></a>
              </ul>
          </nav>
      
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
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
        <h3>Find all the <Bird/> for a surprise! </h3>
        
                
        <button className="light_hover" onClick={() => startScavenger()}>Ok</button>
      </ReactModal>
    </Router>
  );
}

export default App;
