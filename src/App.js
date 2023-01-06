import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Home/>
      <Contact/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;
