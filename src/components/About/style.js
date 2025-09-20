import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  overflow: hidden;
  background: linear-gradient(135deg, #F5F5F7 0%, #FFF8E1 30%, #FFFFFF 50%, #FFF8E1 70%, #F5F5F7 100%);
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
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 2rem;
  border-left: 2px solid rgba(226, 232, 240, 0.5);
  backdrop-filter: blur(20px);

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 8rem;
  color: #0D0D0D;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 4px;
  font-weight: 900;
  text-transform: uppercase;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: #0D0D0D;
  line-height: 1.8;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  opacity: 0.8;
`;

export const Highlight = styled.span`
  color: #FFFFFF;
  font-weight: 700;
  text-transform: uppercase;
  background: #FFB800;
  padding: 4px 8px;
  border-radius: 4px;
`;

export const SubTitle = styled(Title)`
  color: #0D0D0D;
  letter-spacing: 2px;
  font-size: 6rem;
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
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 184, 0, 0.3);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #FFB800;
    box-shadow: 0 0 20px rgba(255, 184, 0, 0.3);
    background: rgba(255, 184, 0, 0.1);
  }
`;

export const SkillImage = styled.img`
  height: 50%;
  object-fit: contain;
  width: 50%;
`;

export const SkillName = styled.p`
  color: #0D0D0D;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  font-family: "Inter", sans-serif;
`;

export const ExperienceTitle = styled.h1`
  font-size: 4rem;
  color: #0D0D0D;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  margin-top: 10rem;
  text-transform: uppercase;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 3rem;
`;

export const ExperienceHeading = styled.h2`
  color: #0D0D0D;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "Raleway", sans-serif;
`;

export const ExperienceText = styled.p`
  font-size: 1.6rem;
  color: #0D0D0D;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  opacity: 0.8;
`;

export const ExperienceText2 = styled(ExperienceText)`
  font-size: 1.2rem;
`;
