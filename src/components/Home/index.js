import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import ParticlesComponent from "../partcles";
import EchoohInspiration from '../Assets/Images/echooh-inspiration.png';

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(13, 13, 13, 0.6) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(13, 13, 13, 0.6) 100%
  ),
  url(${EchoohInspiration});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 5rem;
`;

const Name = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
  letter-spacing: 6px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  margin-bottom: 0;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 184, 0, 0.3);
  animation: slideInFromTop 1.2s ease-out;

  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 3rem;
    letter-spacing: 3px;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 4.5rem;
    letter-spacing: 4px;
  }
`;

const SkillText = styled.h2`
  font-size: 2rem;
  color: #FFB800;
  font-weight: 700;
  text-align: center;
  font-family: "Raleway", sans-serif;
  letter-spacing: 3px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 184, 0, 0.6);
  margin-top: 1rem;
  animation: slideInFromBottom 1.2s ease-out 0.3s both;

  @keyframes slideInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }
`;

const AboutText = styled.h2`
  color: #FFFFFF;
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 1px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-top: 2rem;
  max-width: 800px;
  line-height: 1.6;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.9);
  animation: fadeIn 1.2s ease-out 0.6s both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    margin-top: 1.5rem;
    padding: 0 1rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 1.3rem;
    letter-spacing: 0.8px;
    margin-top: 2rem;
    padding: 0 2rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0;
  padding: 3rem 2rem;
  animation: containerSlideIn 1.5s ease-out 0.9s both;

  @keyframes containerSlideIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Home = () => {
  AOS.init();

  return (
    <>
      <HomeContainer id="home">
        <ParticlesComponent id="particles" />
        <ContentContainer>
          <Name
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            WE MAKE BRANDS UNMISSABLE
          </Name>
          <SkillText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            OUTDOOR ADVERTISING
          </SkillText>
          <AboutText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            From billboards to transit media, we connect your brand with millions where they live, work, and move.
          </AboutText>
        </ContentContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
