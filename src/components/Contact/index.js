import React from "react";
import styled from "styled-components";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const ContactContainer = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  font-size: 8rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Text = styled.p`
  color: #8f9094;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
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
  color: #D4AF37;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ResumeIcon = styled(IoDocumentTextSharp)`
  color: #D4AF37;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  color: #ffffff;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Footer = styled.div`
  background-color: black;
  width: 100%;
  padding-bottom: 2rem;
`;

const FooterText = styled(Text)`
  color: #8f9094;
  font-size: 1.5rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  color: #D4AF37;
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
