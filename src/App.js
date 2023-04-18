import './App.css';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
