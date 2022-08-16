import './App.css';
import './components/main';
import Main from './components/main';
import Navlink from './layout/layout';
import Products from './product/products';
import Waren from './layout/linknavbar/Waren';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navlink />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/main" element={<Main />} />
          <Route path="/Waren" element={<Waren />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
