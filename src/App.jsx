import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSelector} from "react-redux";
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dynamind from './pages/Dynamind';
import DynamindSport from './pages/DynamindSport';
import Noopept from './pages/Noopept';
import Purchases from './pages/Purchases';
import ProductsDetail from './pages/ProductsDetail';
import Loader from './components/Loader';

function App() {
  
  const isLoading = useSelector((state) => state.isLoading);
  
  return (
    <HashRouter>
      {isLoading && <Loader />}
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


