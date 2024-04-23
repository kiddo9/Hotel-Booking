import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'
import Home from './pages/Home';
import Room from './pages/Room';
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/rooms' element={<Room />} />
      </Routes>
      </BrowserRouter>
    <Footer />
    </div>
  );
};

export default App;
