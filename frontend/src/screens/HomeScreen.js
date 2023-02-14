import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import Carousel from 'react-grid-carousel';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import sust1 from '../images/sust1.jpg';
import sust2 from '../images/2.png';
import sust3 from '../images/4.png';
import sust4 from '../images/5.png';
import sust5 from '../images/6.png';
import sust6 from '../images/7.png';
import sust7 from '../images/sust2.jpg';
import sust8 from '../images/sust3.jpg';

// import data from '../data';
import './HomeScreen.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>STAM:CSE</title>
      </Helmet>
      <br></br>
      <div className="container2">
        <h1>there is a background</h1>
        <div>Centered</div>
      </div>
      <br />
      <h1 className="feature">Here is All of Our feature</h1>
      <br />
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={4} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <div>
        <br />
        <h1>SUST Photo Gallery</h1>
        <div className="width-3rem height-4 rounded bg-primary mx-auto"></div>
        <Carousel cols={7} showDots loop>
          <Carousel.Item>
            <img src={sust1} alt="sust1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sust2} alt="sust1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sust3} alt="sust1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sust4} alt="sust1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sust5} alt="sust1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sust6} alt="sust1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sust7} alt="sust1" />
          </Carousel.Item>
        </Carousel>
        <br />
      </div>
    </div>
  );
}
export default HomeScreen;
