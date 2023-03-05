import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>

        <Card.Text>{product.text}</Card.Text>
        <Link to={`/${product.slug}`}>
          <Button variant="success">Click for {product.name}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Product;
