import styled from "styled-components";

export const ServiceContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #F5F5F7 0%, #FFF8E1 30%, #FFFFFF 50%, #FFF8E1 70%, #F5F5F7 100%);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    background-color: #000000;
    row-gap: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 8rem;
  color: #0D0D0D;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 4px;
  font-weight: 900;
  text-transform: uppercase;
  transition: all 0.45s ease-out;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 4rem;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-size: 3.5rem;
  font-family: "Inter", sans-serif;
  letter-spacing: 1px;
  white-space: normal;
  word-break: normal;
  overflow-wrap: anywhere;
  line-height: 1.4;
  color: #0D0D0D;
  font-weight: 400;
  transition: all 0.45s ease-out;
  opacity: 0.8;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const ServiceCardContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 3rem;
  border-left: 2px solid rgba(255, 184, 0, 0.3);
  backdrop-filter: blur(20px);

  @media (min-width: 768px) {
    width: 50%;
    padding: 5rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-family: "Catamaran", sans-serif;
  font-optical-sizing: auto;
  min-width: 30rem;
  flex-grow: 1;
`;

export const Image = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: contain;
  object-position: center;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const CardHeading = styled.h1`
  font-size: 2.5rem;
  font-family: "Raleway", sans-serif;
  color: #0D0D0D;
  font-weight: 700;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const CardDesc = styled.p`
  font-size: 1.6rem;
  color: #0D0D0D;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  column-gap: 1.5rem;
  row-gap: 1rem;
  padding-inline-start: 0;
`;

export const CardListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  height: 4rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 184, 0, 0.3);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    border-color: #FFB800;
    box-shadow: 0 0 20px rgba(255, 184, 0, 0.3);
    background: rgba(255, 184, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 50%;
    align-self: flex-start;
  }
`;

export const CardItemText = styled.p`
  color: #0D0D0D;
  font-size: 1.4rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;
