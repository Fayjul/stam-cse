import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './screens/LogIn/LogIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './screens/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <main>
          <Routes>
            <Route path="/login" element={<LogIn></LogIn>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
