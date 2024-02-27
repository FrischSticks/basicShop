import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import Store from './pages/Store.jsx'
import ShoppingCart from './pages/ShoppingCart.jsx'
import { ShopContextProvider } from './context/shopContext.jsx';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Store />} > </Route>
            <Route path='/cart' element={<ShoppingCart />} > </Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
