import React, { useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkShowcaseContainer = styled.div`
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

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const WorkCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  position: relative;
  cursor: pointer;
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
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const WorkImage = styled.div`
  height: 250px;
  background: linear-gradient(45deg, #000000, #333333);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '${props => props.category}';
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: #FFFFFF;
    padding: 8px 16px;
    border-radius: 20px;
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &::after {
    content: 'VIEW PROJECT';
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(245, 230, 163, 0.9);
    color: #000000;
    padding: 12px 24px;
    border-radius: 25px;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  ${WorkCard}:hover &::after {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

const WorkContent = styled.div`
  padding: 2rem;
`;

const WorkTitle = styled.h3`
  font-size: 1.8rem;
  color: #000000;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const WorkDescription = styled.p`
  font-size: 1.1rem;
  color: #000000;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const WorkTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(0, 0, 0, 0.1);
  color: #000000;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ViewAllButton = styled.button`
  background: #000000;
  color: #F5E6A3;
  border: none;
  padding: 18px 36px;
  border-radius: 50px;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 6rem auto 0;
  display: block;
  animation: buttonSlideIn 1s ease-out 1.2s both;

  @keyframes buttonSlideIn {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin: 4rem auto 0;
    padding: 15px 30px;
    font-size: 1rem;
  }
`;

const WorkShowcase = () => {
  AOS.init();

  const workData = [
    {
      id: 1,
      title: "Metro Billboard Campaign",
      description: "Large-scale outdoor advertising campaign across major metro stations featuring dynamic digital displays and interactive elements.",
      category: "Billboard",
      tags: ["Outdoor", "Digital", "Metro", "Interactive"]
    },
    {
      id: 2,
      title: "Brand Transit Solutions",
      description: "Comprehensive transit media strategy including bus wraps, station branding, and mobile advertising solutions.",
      category: "Transit",
      tags: ["Transit", "Mobile", "Branding", "Strategy"]
    },
    {
      id: 3,
      title: "Highway Billboard Network",
      description: "Strategic placement of premium billboard locations along major highways with high traffic visibility.",
      category: "Highway",
      tags: ["Highway", "Premium", "Strategic", "High Traffic"]
    },
    {
      id: 4,
      title: "Airport Advertising Suite",
      description: "Complete airport advertising package including terminal displays, baggage claim branding, and gate advertising.",
      category: "Airport",
      tags: ["Airport", "Terminal", "Premium", "Travel"]
    },
    {
      id: 5,
      title: "Shopping Mall Integration",
      description: "Multi-level shopping mall advertising with digital displays, floor graphics, and interactive kiosks.",
      category: "Mall",
      tags: ["Mall", "Digital", "Interactive", "Multi-level"]
    },
    {
      id: 6,
      title: "City Center Campaign",
      description: "Urban center advertising featuring street furniture, digital bus stops, and pedestrian zone branding.",
      category: "Urban",
      tags: ["Urban", "Street Furniture", "Digital", "Pedestrian"]
    }
  ];

  return (
    <WorkShowcaseContainer id="work">
      <Title data-aos="fade-up">Our Work</Title>
      <Subtitle data-aos="fade-up" data-aos-delay="200">
        Showcasing successful outdoor advertising campaigns that connect brands with their target audiences across diverse media platforms.
      </Subtitle>
      
      <WorkGrid>
        {workData.map((work, index) => (
          <WorkCard key={work.id} delay={index * 0.1} data-aos="fade-up" data-aos-delay={index * 100}>
            <WorkImage category={work.category}>
              {/* Placeholder for work image */}
            </WorkImage>
            <WorkContent>
              <WorkTitle>{work.title}</WorkTitle>
              <WorkDescription>{work.description}</WorkDescription>
              <WorkTags>
                {work.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </WorkTags>
            </WorkContent>
          </WorkCard>
        ))}
      </WorkGrid>

      <ViewAllButton data-aos="fade-up" data-aos-delay="800">
        View All Projects
      </ViewAllButton>
    </WorkShowcaseContainer>
  );
};

export default WorkShowcase;
