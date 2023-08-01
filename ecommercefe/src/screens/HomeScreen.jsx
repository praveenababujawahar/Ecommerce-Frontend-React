import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Carousel, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../products';
import HomeCover from '../components/HomeCover';
import Rating from '../components/Rating';
import './HomeScreen.css';

const HomeScreen = () => {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 992) {
        setScreenSize('large');
      } else if (width >= 768 && width < 992) {
        setScreenSize('medium');
      } else {
        setScreenSize('small');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCardsPerSlide = () => {
    if (screenSize === 'large') {
      return 4;
    } else if (screenSize === 'medium') {
      return 2;
    } else {
      return 1;
    }
  };

  const getSlides = () => {
    const cardsPerSlide = getCardsPerSlide();
    const filteredProducts = products.filter((product) => product.rating > 3.5);
    const numSlides = Math.ceil(filteredProducts.length / cardsPerSlide);
    const slides = [];

    for (let i = 0; i < numSlides; i++) {
      const startIndex = i * cardsPerSlide;
      const endIndex = startIndex + cardsPerSlide;
      const slideProducts = filteredProducts.slice(startIndex, endIndex);
      slides.push(slideProducts);
    }
    return slides;
  };

  const slides = getSlides().map((slideProducts, slideIndex) => (
    <Carousel.Item key={slideIndex} className='carousel-item'>
      <Row className='justify-content-center'>
        {slideProducts.map((product) => (
          <Col key={product._id} lg={3} md={6} sm={12}>
            <Link to={`/product/${product._id}`} className='card-link'>
              <Card className='my-3 p-3 rounded card w-100 overflow-hidden'>
                <Card.Img
                  src={product.image}
                  variant='top'
                  className='card-img-top'
                  alt='...'
                />
                <Card.Body className='card-body border border overflow-y-auto'>
                  <div>
                    <Card.Title as='h5' className='card-title'>
                      <strong>{product.name}</strong>
                    </Card.Title>
                  </div>
                  <Card.Text as='div' className='card-text'>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </Card.Text>
                  <Card.Text as='h3' className='item-price'>
                    ₹{product.price}
                  </Card.Text>
                  <Button variant='primary' className='mt-1 btn'>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  ));

  return (
    <>
      <HomeCover />
      <>
        <Container>
          <h2 className='text-center mt-1 mb-1'>Featured Products</h2>
          <Carousel className='carousel-inner'>{slides}</Carousel>
        </Container>
      </>
    </>
  );
};

export default HomeScreen;
