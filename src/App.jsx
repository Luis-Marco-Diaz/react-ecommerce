import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Login from './pages/login';
import Dynamind from './pages/dynamind';
import DynamindSport from './pages/dynamindSport';
import Noopept from './pages/noopept';
import Purchases from './pages/purchases';
import ProductsDetail from './pages/ProductsDetail';
import Loader from './components/Loader';

function App() {

  return (
    <HashRouter>
      <Loader/>
      <AppNavbar/>
      <Routes>
            <Route element = { <Home/> } path='/'/>
            <Route element = { <Login/> } path='/Login'/>
            <Route element = { <Dynamind/> } path='/Dynamind'/>
            <Route element = { <DynamindSport/> } path='/DynamindSport'/>
            <Route element = { <Noopept/> } path='/Noopept'/>
            { /* Protected Routes*/ }
            <Route element = { <Purchases/> } path='/Purchases'/>
            <Route element = { <ProductsDetail/> } path='/ProductsDetail/:id'/>
      </Routes>
    </HashRouter>
  );
}

export default App;


