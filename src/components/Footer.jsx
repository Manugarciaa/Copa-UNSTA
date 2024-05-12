import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = ({ text }) => {
  return (
    <footer>
      <Container>
        <Row className='bg-primary text-white'>
          Footer seccion
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
