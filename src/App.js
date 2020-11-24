
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
import Blog from './components/Blog/Blog';

import ParticleComponent from "./ParticleComponent";
// import Particles from 'react-particles-js';


function App() {

	const styles = {
		root: {
			fontFamily: "sans-serif",
			textAlign: "center",
			height: "100%",
			//   background: "#222",
			display: "flex",
			flex: "wrap",
			justifyContent: "center",
			alignItems: "center"
		}
	};

	return (
		<div className="App">
			<BrowserRouter>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}}
				>
					<ParticleComponent />
					{/* <div
						style={{
							position: "absolute !important",
							top: 0,
							left: 0,
							width: "100%",
							height: "100vh"
						}}
					>
					</div> */}
				</div>
				<Navbar />
				<Mern />
				<SocialConnect />
				<Switch>

					<Route exact path='/'> <LandingPage /> </Route>
					<Route path='/skills'> <SkillsPage /> </Route>
					<Route path='/blog'> <Blog /> </Route>
					<Route path='/projects'> <Projects /> </Route>
					<Route path='*'><h5>404 Error</h5></Route>
				</Switch>
				<div className="container mt-5">
					<Footer />
				</div>
			</BrowserRouter>

		</div>
	);
}


export default App;
