import AnimatedCursor from "react-animated-cursor"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Hero from './components/Hero'
import Projects from './components/Projects';
import Resume from "./components/Resume";
import Skills from './components/Skills';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="dark:bg-body font-barlow dark:text-white text-body overflow-hidden">
      <Router>
        <AnimatedCursor
          innerSize={20}
          outerSize={50}
          // color='0, 0, 0'
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
        />
        <Routes>
          <Route exact path='/' element=
            {
              <div>
                <header>
                  <Navbar />
                </header>
                <Hero />
                <Projects />
                <Skills />
                <Footer />
              </div>
            } 
          />
          <Route exact path='/resume' element={<Resume />} />
        </Routes>

      </Router>
      

    </div>
  );
}

export default App;
