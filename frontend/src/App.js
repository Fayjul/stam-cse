import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import ProfileScreen from './screens/ProfileScreen';
import { getError } from './utils';
import axios from 'axios';
import ProtectedRoute from './components/ProtectedRoute';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import UserListScreen from './screens/UserListScreen';
import './App.css';
import FormComponent from './components/FormComponents';
import PapersScreen from './screens/PapersScreen';
import logo from './images/sust-logo.png';
import nameimage from './images/sust_name_omegle.png';
import UploadPoject from './components/UploadProject';
import ProjectScreen from './screens/ProjectScreen';
import ShareExpeScreen from './screens/ShareExpeScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? fullBox
              ? 'site-container active-cont d-flex flex-column full-box'
              : 'site-container active-cont d-flex flex-column'
            : fullBox
            ? 'site-container d-flex flex-column full-box'
            : 'site-container d-flex flex-column'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>STAM:CSE</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>

                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top img-container"
                  alt="React Bootstrap logo"
                />{' '}
                <img
                  src={nameimage}
                  width="600"
                  height="60"
                  className="d-inline-block align-bottom margin-left"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route path="/resercher_profile" element={<UserListScreen />} />
              <Route path="/uploadpaper" element={<FormComponent />} />
              <Route path="/uploadprojects" element={<UploadPoject />} />
              <Route path="/papers" element={<PapersScreen />} />
              <Route path="/projects" element={<ProjectScreen />} />
              <Route
                path="/share_your_experience"
                element={<ShareExpeScreen />}
              />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
