import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <header id="header"> 
        <Header />
      </header>
      
      <main>
        <Slider />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
