import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';

function App() {

  return (
    <HashRouter>
      <AppNavbar/>
      <Routes>
        <Route
        element = { <Home/> }
        path='/'
        />
      </Routes>
    </HashRouter>
  );
}

export default App;


