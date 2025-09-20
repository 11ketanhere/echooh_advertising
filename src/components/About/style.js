import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  overflow: hidden;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%);
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    width: 49%;
  }
`;

export const RightContainer = styled.div`
  background: rgba(26, 26, 26, 0.8);
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 2rem;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 12rem;
  color: #D4AF37;
  font-family: "Oswald", sans-serif;
  letter-spacing: 4px;
  font-weight: 900;
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  background: linear-gradient(45deg, #D4AF37, #FFD700);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  color: #CCCCCC;
  line-height: 1.8;
  font-weight: 300;
`;

export const Highlight = styled.span`
  color: #D4AF37;
  font-weight: bold;
  text-transform: capitalize;
`;

export const SubTitle = styled(Title)`
  color: #D4AF37;
  letter-spacing: 2px;
  font-size: 8rem;
`;

export const SkillContainer = styled.ul`
  padding-inline-start: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 2rem;
`;

export const SkillList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const SkillListItem = styled.div`
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.1));
  border-radius: 50%;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #D4AF37;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
  }
`;

export const SkillImage = styled.img`
  height: 50%;
  object-fit: contain;
  width: 50%;
`;

export const SkillName = styled.p`
  color: #FFFFFF;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;

export const ExperienceTitle = styled.h1`
  font-size: 4rem;
  color: #D4AF37;
  font-family: "Oswald";
  font-weight: 700;
  letter-spacing: 3px;
  margin-top: 10rem;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 3rem;
`;

export const ExperienceHeading = styled.h2`
  color: #D4AF37;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 2rem;
`;

export const ExperienceText = styled.p`
  font-size: 1.6rem;
  color: #CCCCCC;
  font-weight: 300;
`;

export const ExperienceText2 = styled(ExperienceText)`
  font-size: 1.2rem;
`;
