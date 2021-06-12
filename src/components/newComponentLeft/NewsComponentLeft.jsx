import React from 'react';
import './newsComponentLeftStyle.scss';
import Button from 'react-bootstrap/Button';
import fistBump from '../../assets/wildboys1.jpg';
export const NewsComponentLeft = () => (
  <div className='news-component-left'>
    <img className='news-image-left' src={fistBump} alt='logo' />

    <div className='write-up-left'>
      <h1 className='about-us'> What are the Wild Boys Camp Outs</h1>
      <hr class='hr-line' />
      <span>
        <br />
        The Wild Boys Camp-Out was established in 2020 by a bunch of blue
        collar, beer drinking, eagle riding motorcycle hooligans. We started by
        spontaneously putting together a casual last minute camp-out that more
        than 100 people attended. When this began we never had the intentions to
        make it an annual event but because of how memorable the camp-outs
        turned out, we decided to make this a summer event in hopes of bringing
        even more of the motorcycle community together.
        <br />
        <br />
        The Wild Boys Camp Out welcomes anyone and everyone we just ask that you
        respect one another, the environment and your surroundings.
        <br /> <br />
        <em>
          Stay safe, stay wild. <br />
          ~Wild Boys Camp Out
        </em>
        <hr class='hr-line' />
        <Button
          href='https://www.instagram.com/thewildboyscampout/?hl=en'
          id='mybtn'
          target='_blank'
          variant='warning'
        >
          {' '}
          Check Out Our Instagram
        </Button>
      </span>
    </div>
  </div>
);
