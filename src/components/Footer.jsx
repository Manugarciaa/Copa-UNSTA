import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #23282d;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #ccc;
  }
`;

const CopyrightText = styled.p`
  font-size: 1rem;
  margin-bottom: 5.7rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 1.7rem;
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <ContactInfoText>Universidad del Norte Santo Tomás de Aquino</ContactInfoText>
        <ContactInfoText>Dirección: Av. Pdte. Perón 2085</ContactInfoText>
        <ContactInfoText>Teléfono: 0381 410 1198</ContactInfoText>
        <ContactInfoText>Correo: informes@unsta.edu.ar</ContactInfoText>
      </ContactInfo>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/semana.ingenieria.unsta/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
      </SocialLinks>
      <CopyrightText>&copy; Universidad del Norte Santo Tomás de Aquino | Copyright © 2023 Todos los Derechos Reservados.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;