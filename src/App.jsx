import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Room from './pages/Room'
import Footer from './components/footer'
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/room' element={<Room/>} />
        <Route path='/contact' element={Contact} />
      </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
};

export default App;
