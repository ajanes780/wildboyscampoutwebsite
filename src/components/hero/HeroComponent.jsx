import { Carousel, Image } from 'react-bootstrap';
import React from 'react';
import wild1 from '../../assets/wildboys2021/wild-min.jpg';
import wild2 from '../../assets/wildboys2021/ppp-min.jpg';
import wild3 from '../../assets/wildboys2021/3.jpg';
import wild4 from '../../assets/wildboys2021/4.jpg';
import wild5 from '../../assets/wildboys2021/5.jpg';
import wild6 from '../../assets/wildboys2021/6.jpg';
import wild7 from '../../assets/wildboys2021/7.jpg';
import wild8 from '../../assets/wildboys2021/8.jpg';
import wild9 from '../../assets/wildboys2021/9.jpg';
import wild10 from '../../assets/wildboys2021/10.jpg';
import wild11 from '../../assets/wildboys2021/11.jpg';
import wild12 from '../../assets/wildboys2021/12.jpg';
import wild13 from '../../assets/wildboys2021/13.jpg';
import wild14 from '../../assets/wildboys2021/14.jpg';
import wild15 from '../../assets/wildboys2021/15.jpg';
import wild16 from '../../assets/wildboys2021/16.jpg';
import wild17 from '../../assets/wildboys2021/17.jpg';

import logo from '../../assets/logo.jpeg';
import './heroComponentStyle.scss';

export const HeroComponent = () => (
  <Carousel interval={2000}>
    <Carousel.Item>
      <Image src={logo} alt='logo' fluid />>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild1} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild2} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild3} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild4} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild5} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild6} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Image src={wild7} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Image src={wild8} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild9} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild10} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild11} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild12} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild13} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild14} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild15} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild16} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={wild17} alt='logo' fluid />
      <Carousel.Caption>
        <h3>Wild Boys 2021</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
