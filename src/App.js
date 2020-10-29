
import './App.css';
import BgParticles from './components/ParticleComponents/BgParticles';
import Hero from './components/ParticleComponents/Hero';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import './styles.scss';
import LandingPage from './components/LandingPage/LandingPage';
import SkillsPage from './components/Skills/SkillsPage';
import Footer from './components/HomePageComponents/Navbar/Footer/Footer';
import Navbar from './components/HomePageComponents/Navbar/Navbar';
import Mern from './components/Mern/Mern';
import SocialConnect from './components/SocialConnect/SocialConnect';

function App() {
  return (
    <div className="App">
      {/* <BgParticles>
        <Hero>
          <div style={{ zIndex: '2'}}> */}

      <BrowserRouter>
        <Navbar />
        <Mern/>
        <SocialConnect/>
        <Switch>

          <Route exact path='/'> <LandingPage /> </Route>
          <Route path='/skills'> <SkillsPage /> </Route>
          <Route path='/projects'> <Projects /> </Route>
          <Route path='*'><h5>404 Error</h5></Route>
         
        </Switch>
        <div className="container mt-5">
            <Footer />
          </div>
      </BrowserRouter>
      {/* </div>

        </Hero>
      </BgParticles> */}

    </div>
  );
}


export default App;
