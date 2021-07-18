import React from 'react';
import fistBump from '../../assets/wildboys1.jpg';
import { Col, Image, Row, Button } from 'react-bootstrap';
export const NewsComponentLeft = () => {
  return (
    <Row className='m-3'>
      <Col md={6}>
        <Image src={fistBump} alt='the boys riding motorcyles' fluid />
      </Col>
      <Col className='justify-content-md-center' md={6}>
        <hr class='hr-line' />
        <h3 style={{ color: 'black' }}>
          The Wild Boys Camp-Out was established in 2020 by a bunch of blue
          collar, beer drinking, eagle riding motorcycle hooligans. We started
          by spontaneously putting together a casual last minute camp-out that
          more than 100 people attended. When this began we never had the
          intentions to make it an annual event but because of how memorable the
          camp-outs turned out, we decided to make this a summer event in hopes
          of bringing even more of the motorcycle community together.
        </h3>

        <h3 style={{ color: 'black' }}>
          The Wild Boys Camp Out welcomes anyone and everyone we just ask that
          you respect one another, the environment and your surroundings.
        </h3>
        <h3
          style={{ color: 'black', display: 'flex', justifyContent: 'center' }}
        >
          Stay safe, stay wild. <br />
          ~Wild Boys Camp Out
        </h3>
        <hr class='hr-line' />

        <Button
          className='btn col-12'
          href='https://www.instagram.com/thewildboyscampout/?hl=en'
          variant='warning'
          target='_blank'
        >
          Check Out Our Instagram
        </Button>
      </Col>
    </Row>
  );
};
