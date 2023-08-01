import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Product.css';
import products from '../products';

const Product = ({ product }) => {
  const productData = products.find((p) => p._id === product._id);

  return (
    <Card className='my-3 p-3 rounded card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img className='card-img' src={productData.image} variant='top' />
      </Link>

      <Card.Body className='card-body'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='card-title'>
            <strong>{productData.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' className='card-text'>
          <Rating
            value={productData.rating}
            text={`${productData.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>₹{productData.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
