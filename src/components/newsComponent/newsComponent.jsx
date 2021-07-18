import React from 'react';
import './newsComponentStyle.scss';
import { Row, Col, Image } from 'react-bootstrap';
import poster from '../../assets/wildboys2021/poster.jpg';
export const NewsComponent = () => {
  return (
    <>
      <h1 style={{ color: 'black', margin: '1rem', fontStyle: 'italic' }}>
        {' '}
        SEASON ENDER COMING SOON{' '}
      </h1>
      <Row className='m-3'>
        <Col className='my-3' md={3}>
          <Image src={poster} fluid />
        </Col>
        <Col className='my-3' md={3}>
          <Image src={poster} fluid />
        </Col>
        <Col className='my-3' md={3}>
          <Image src={poster} fluid />
        </Col>
        <Col className='my-3' md={3}>
          <Image src={poster} fluid />
        </Col>
      </Row>
    </>
  );
};
