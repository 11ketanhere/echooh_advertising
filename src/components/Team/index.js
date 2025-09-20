import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const TeamContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #F5F5F7 0%, #FFF8E1 30%, #FFFFFF 50%, #FFF8E1 70%, #F5F5F7 100%);
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: #0D0D0D;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  animation: slideInFromTop 1s ease-out;

  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: #0D0D0D;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  opacity: 0.8;
  max-width: 800px;
  margin: 0 auto 6rem;
  line-height: 1.6;
  animation: fadeIn 1s ease-out 0.3s both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 4rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1rem;
  }
`;

const TeamCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 184, 0, 0.3);
  transition: all 0.4s ease;
  position: relative;
  animation: cardSlideIn 0.8s ease-out ${props => props.delay}s both;

  @keyframes cardSlideIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 184, 0, 0.2);
    border-color: rgba(255, 184, 0, 0.5);
  }
`;

const TeamImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(45deg, #000000, #333333);
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);

  &::before {
    content: '${props => props.initials}';
    font-size: 4rem;
    font-weight: 900;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(245, 230, 163, 0.2), rgba(240, 217, 107, 0.1));
    border-radius: 50%;
  }
`;

const TeamName = styled.h3`
  font-size: 2.5rem;
  color: #0D0D0D;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const TeamRole = styled.p`
  font-size: 1.4rem;
  color: #FFB800;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TeamDescription = styled.p`
  font-size: 1.2rem;
  color: #0D0D0D;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.8;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFB800;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid rgba(255, 184, 0, 0.3);

  &:hover {
    background: #FFB800;
    color: #FFFFFF;
    transform: scale(1.1);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #0D0D0D;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 184, 0, 0.2);

  &:hover {
    background: rgba(255, 184, 0, 0.1);
    transform: translateX(5px);
    border-color: rgba(255, 184, 0, 0.4);
  }
`;

const Team = () => {
  AOS.init();

  const teamMembers = [
    {
      id: 1,
      name: "Kartik Parab",
      role: "Founder & Creative Director",
      initials: "K",
      description: "With over 8 years of experience in outdoor advertising and brand strategy, Kartik founded Echooh Advertising with a vision to revolutionize how brands connect with their audiences through innovative outdoor media solutions.",
      social: {
        linkedin: "https://linkedin.com/in/Kartik",
        instagram: "https://instagram.com/Kartik",
        twitter: "https://twitter.com/Kartik"
      },
      contact: {
        email: "Kartik@echoohadvertising.com",
        phone: "+91 9876543210"
      }
    },
    {
      id: 2,
      name: "Shivam Shrivastav",
      role: "Co-Founder & Strategy Director",
      initials: "S",
      description: "Shivam brings 6 years of digital marketing and media planning expertise to Echooh. His strategic thinking and client relationship skills have been instrumental in building partnerships with major brands across various industries.",
      social: {
        linkedin: "https://linkedin.com/in/Shivam",
        instagram: "https://instagram.com/Shivam",
        twitter: "https://twitter.com/Shivam"
      },
      contact: {
        email: "Shivam@echoohadvertising.com",
        phone: "+91 9876543211"
      }
    }
  ];

  return (
    <TeamContainer id="team">
      <Title data-aos="fade-up">Meet The Team</Title>
      <Subtitle data-aos="fade-up" data-aos-delay="200">
        The passionate minds behind Echooh Advertising, dedicated to creating impactful outdoor advertising solutions.
      </Subtitle>
      
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={member.id} delay={index * 0.2} data-aos="fade-up" data-aos-delay={index * 200}>
            <TeamImage initials={member.initials} />
            <TeamName>{member.name}</TeamName>
            <TeamRole>{member.role}</TeamRole>
            <TeamDescription>{member.description}</TeamDescription>
            
            <SocialLinks>
              <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
            </SocialLinks>

            <ContactInfo>
              <ContactItem href={`mailto:${member.contact.email}`}>
                <FaEnvelope />
                {member.contact.email}
              </ContactItem>
              <ContactItem href={`tel:${member.contact.phone}`}>
                <FaPhone />
                {member.contact.phone}
              </ContactItem>
            </ContactInfo>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default Team;
