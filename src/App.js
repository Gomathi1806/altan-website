import './App.css';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Homepage';
import About from './pages/AboutAingel';
import Knowledge from './pages/Knowledge';
import Research from './pages/Research';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Appcss">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutAingel' element={<About />}/>
        <Route path='/knowledge' element={<Knowledge />}/>
        <Route path='/research' element={<Research />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
