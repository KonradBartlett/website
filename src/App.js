import { useEffect, useState } from 'react';
import {
  useLocation,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReactModal from 'react-modal';
import { AnimatePresence } from 'framer-motion';

import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Home } from './pages/home';
import { Resume } from './pages/resume';
import { startScavenger } from './components/scavenger';
import { Background } from './components/background';
import { Portfolio } from './pages/portfolio';
import { Footer } from './components/footer';

import {ReactComponent as Bird} from './assets/bird.svg';
import {ReactComponent as Menu} from './assets/menu.svg';


import './app.scss';

function App() {
  const location = useLocation();

  // Apply the cached theme on reload
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [modalOpen, setModalIsOpen] = useState(false);
  const [themeText, setThemeText] = useState(localStorage.getItem('theme')  === 'light' ? '🌙' : '🌤️');
  const [showMenu, setShowMenu] = useState('');

  useEffect(() => {
    if(theme !== undefined){
      document.body.className = theme === 'light' ? 'light' : 'dark solar';
    } else {
      document.body.className = 'dark solar'
    }
    // if(isSolar){
    //   document.body.className += ' solar';
    // }
  },[theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark solar' : 'light');
    setThemeText(theme === 'light' ? '🌤️':  '🌙');
    localStorage.setItem('theme', theme === 'light' ? 'dark solar' : 'light');
    document.body.className = theme === 'light' ? 'dark solar' : 'light';
  }

  const toggleMenu = () => {
    setShowMenu(showMenu === '' ? 'show_menu' : '');
  }

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
      <main style={{'minHeight': '100vh'}}>
          <nav className="navbar">
              <ul className="navbar-nav">
                <h2 className="header large">Konrad Bartlett</h2>
                  <Link className="nav-item dark_hover large" to="/">Home</Link>
                  <Link className="nav-item dark_hover large" to="/about">About</Link>
                  <Link className="nav-item dark_hover large" to="/resume">Resume</Link>
                  {/* <Link className="nav-item dark_hover large" to="/projects">Projects</Link> */}
                  <Link className="nav-item dark_hover large" to="/portfolio">Portfolio</Link>
      
                  <div className="veritcal-row large"></div> 
                  <li className="nav-item dark_hover has-dropdown large" title="Toggle theme" onClick={toggleTheme}>
                    <a href="#!">{themeText}</a>
                  </li>
                  <a id="nav-bird" className="nav-item dark_hover large" href="#!" onClick={() => {setModalIsOpen(true)}}><Bird/></a>


              {/* mobile */}
                <h2 className="header small">KB</h2>
                <Menu className="small has-dropdown" onClick={() => {setShowMenu(showMenu === '' ? 'show_menu' : '')}}/>
              </ul>

          </nav>
          <div className={`menu small  ${showMenu}`}>
            <Link className="nav-item dark_hover small" onClick={() => {toggleMenu(); scrollToTop()}} to="/">Home</Link>
            <Link className="nav-item dark_hover small" onClick={() => {toggleMenu(); scrollToTop()}} to="/about">About</Link>
            <Link className="nav-item dark_hover small" onClick={() => {toggleMenu(); scrollToTop()}} to="/resume">Resume</Link>
            {/* <Link className="nav-item dark_hover small" onClick={() => {toggleMenu(); scrollToTop()}} to="/projects">Projects</Link> */}
            <Link className="nav-item dark_hover small" onClick={() => {toggleMenu(); scrollToTop()}} to="/portfolio">Portfolio</Link>
            <li className="nav-item dark_hover has-dropdown small" title="Toggle theme" onClick={toggleTheme}>
                <a href="#!" className="small">{themeText}</a>
            </li>
          </div>
      
      <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
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
          </AnimatePresence>

          <Footer />
      <Background/>
      <div className="fireworks" />
      <ReactModal isOpen={modalOpen}>
        <h3>Find all the <Bird/> for a surprise! </h3>
        <button className="light_hover" onClick={() => startScavenger()}>Ok</button>
      </ReactModal>
      </main>

  );
}

export default App;
