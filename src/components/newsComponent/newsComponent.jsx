import React from 'react';
import './newsComponentStyle.scss';
import { ArrowDown } from 'react-bootstrap-icons';
import wildboys from '../../assets/twbc-min.jpeg';
import { CardComponent } from '../card/CardComponent';

export const NewsComponent = () => {
  const title = 'Meet Dawson';
  const buttonMsg = 'Donate Now';
  const linkUrl =
    'https://kwc.akaraisin.com/ui/horsepowerforhope2021/participant/6947857';
  const image =
    'https://raisincdn.akaraisin.com/Org_102/EventLocation_23312/nAWUi1.png';

  const bio =
    'Dawson is 5 years old and was diagnosed with Acute Lymphoblastic Leukemia in October 2020. His treatment will last for 3 years. He loves his family, trucks, farming toys and is looking forward to meeting his new sister. On his sick or lazy days, Dawson loves to cuddle while watching his iPad and playing games. He is the funniest little boy who really knows how to make your heart melt. “Kids with Cancer Society has been so incredibly helpful by providing parking passes, emergency funding, gift cards and so much more.” Dawson’s Mom';
  return (
    <>
      <div className='news-component-top'>
        <div className='write-up'>
          <h1> Latest News </h1>
          <hr class='hr-line' />
          <br></br>
          <span>
            Wild Boys July 2, 2021 was a success, stay tuned for the season
            ender
          </span>
          <br />
          <ArrowDown className='down-arrow' />
        </div>

        {/* / <img className='news-image-top' src={wildboys} alt='logo' /> */}
      </div>

      <CardComponent
        image={image}
        title={title}
        buttonMsg={buttonMsg}
        linkUrl={linkUrl}
        bio={bio}
      />
    </>
  );
};
