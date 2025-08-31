import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../rtk/slices/cartSlice';


function CardComponent({product}) {

  const dispatch = useDispatch();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.price} $
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Card</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;