import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import './cardComponentStyle.scss';

export const CardComponent = ({
  image,
  title,
  bio,
  onClick,
  buttonMsg,
  linkUrl,
}) => {
  const history = useHistory();
  return (
    <Card id='store-card'>
      <Card.Img
        variant='top'
        src={image}
        Style={{ Height: '100px', maxWidth: '500px' }}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{title}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Button
          // onClick={() => history.push(linkUrl)}
          id='dawson'
          variant='warning'
        >
          <a href={linkUrl}> {buttonMsg}</a>
          {/* <Link to={linkUrl}>{buttonMsg}</Link> */}
        </Button>
      </Card.Body>
    </Card>
  );
};
