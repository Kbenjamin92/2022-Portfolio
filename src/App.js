import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects/Project'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
