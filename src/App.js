import AnimatedCursor from "react-animated-cursor"

import Hero from './components/Hero'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

function App() {
  return (
    <div className="dark:bg-body font-silkscreen dark:text-white text-body overflow-hidden">
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
      <header className=''>
        <Navbar />
      </header>
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
