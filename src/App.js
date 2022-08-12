import { useState, useEffect } from "react";
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

const query = `
{
    aboutCollection {
        items {
            title,
            description,
            desc {
                json
            }
        }
    }
}
`

function App() {
    const [aboutCollection, setAboutCollection] = useState(null);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_CDI}`
                },
                body: JSON.stringify({ query })
            })
            .then((response) => response.json())
            .then(({ data, errors}) => {
                if(errors) {
                    console.error(errors)
                }

                setAboutCollection(data.aboutCollection.items[0]);
            });
    }, []);

    if (!aboutCollection) {
        return "loading..."
    }

    return (
        <div className="App">
            <Router>
                <Nav/>
                <main id="main">
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About about={aboutCollection}/>}/>
                    <Route exact path='/music' element={<Music/>}/>
                    <Route exact path='/movies' element={<Movies/>}/>
                    <Route exact path='/articles' element={<Articles/>}/>
                </Routes>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
