import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Nav';
import HomePage from './components/Home';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
