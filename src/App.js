import './App.css';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Movies from './pages/Movies';
import Music from './pages/Music';
import About from './pages/About';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Footer from './components/Footer';


function App() {
    return (
        <div className="App">
            <Router>
                <Nav/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/music' element={<Music/>}/>
                    <Route exact path='/movies' element={<Movies/>}/>
                    <Route exact path='/articles' element={<Articles/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
