import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';

function App() {
  return (
    <Router>
    <Header />
      <div className='App'>
        <Routes>
          <Route path='/' exact element={ <ProductListing /> } />
          <Route path='/product/:productId'  element={ <ProductDetails /> } />
          <Route path='*'>Page Not Found - 404</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
