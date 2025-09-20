import React from "react";
import styled from "styled-components";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const ContactContainer = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #F5F5F7 0%, #FFF8E1 30%, #FFFFFF 50%, #FFF8E1 70%, #F5F5F7 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  color: #0D0D0D;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Text = styled.p`
  color: #0D0D0D;
  font-size: 1.8rem;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  opacity: 0.8;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  column-gap: 2rem;

  @media (max-width: 768px) {
    column-gap: 1rem;
  }
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const GithubIcon = styled(FaGithub)`
  color: #FFB800;
  font-size: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0D0D0D;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ResumeIcon = styled(IoDocumentTextSharp)`
  color: #FFB800;
  font-size: 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0D0D0D;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  color:rgb(0, 0, 0);
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Footer = styled.div`
  background-color: black;
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled(Text)`
  color: #8f9094;
  font-size: 1.5rem;
  align-items: center;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #FFB800;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 184, 0, 0.3);
`;

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <Title>Keep In Touch.</Title>
        <Text>
          Ready to own the outdoors? Let's discuss your next outdoor advertising campaign.
        </Text>
        <Text>echoohadvertising@gmail.com</Text>

        <LinkContainer>
          <LinkItem>
            <GithubIcon />
            <SubText
              as="a"
              href="https://instagram.com/ECHOOHADVERTISING"
              target="_blank"
            >
              Instagram
            </SubText>
          </LinkItem>
          <LinkItem>
            <ResumeIcon />
            <SubText
              as="a"
              href="tel:+918369422925"
              target="_blank"
            >
              +91 8369422925
            </SubText>
          </LinkItem>
        </LinkContainer>
      </ContactContainer>
      <Footer>
        <FooterText>
          © 2024 <Highlight>Echooh Advertising</Highlight>. All rights reserved.
        </FooterText>
      </Footer>
    </>
  );
};

export default Contact;
