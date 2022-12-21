import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './screens/HomePage/HomePage';
import Login from './screens/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
