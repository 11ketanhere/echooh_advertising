import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import ParticlesComponent from "../partcles";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%);
`;

const Name = styled.h1`
  font-size: 12rem;
  font-weight: 900;
  color: #D4AF37;
  text-align: center;
  letter-spacing: 4px;
  font-family: "Oswald", sans-serif;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3);
  background: linear-gradient(45deg, #D4AF37, #FFD700, #D4AF37);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3);
    }
    to {
      text-shadow: 0 0 40px rgba(212, 175, 55, 0.8), 0 0 80px rgba(212, 175, 55, 0.5);
    }
  }

  @media (max-width: 600px) {
    font-size: 4rem;
    letter-spacing: 2px;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 7rem;
    letter-spacing: 3px;
  }
`;

const SkillText = styled.h2`
  font-size: 6rem;
  color: #D4AF37;
  font-weight: 700;
  text-align: center;
  font-family: "Oswald", sans-serif;
  letter-spacing: 3px;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
  background: linear-gradient(45deg, #D4AF37, #FFD700);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 2rem;

  @media (max-width: 600px) {
    font-size: 3.5rem;
    letter-spacing: 1px;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 4.5rem;
    letter-spacing: 2px;
  }
`;

const AboutText = styled.h2`
  color: #FFFFFF;
  font-size: 4rem;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  opacity: 0.9;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 3rem;
    letter-spacing: 1.5px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const Home = () => {
  AOS.init();

  return (
    <>
      <HomeContainer id="home">
        <ParticlesComponent id="particles" />
        <MainContainer>
          <Name
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            Echooh Advertising
          </Name>
          <AboutText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            Creative Advertising Agency specializing in
          </AboutText>
          <SkillText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            Outdoor Advertising
          </SkillText>
        </MainContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
