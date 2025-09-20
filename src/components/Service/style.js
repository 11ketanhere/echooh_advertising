import styled from "styled-components";

export const ServiceContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%);

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
  transition: all 0.45s ease-out;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-size: 10rem;
  font-family: "Oswald";
  letter-spacing: 2px;
  white-space: normal;
  word-break: normal;
  overflow-wrap: anywhere;
  line-height: 1.2;
  color: #CCCCCC;
  font-weight: 300;
  transition: all 0.45s ease-out;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const ServiceCardContainer = styled.div`
  background: rgba(26, 26, 26, 0.8);
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 3rem;
  border-left: 2px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(10px);

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
  font-size: 3rem;
  font-family: "Oswald", sans-serif;
  color: #D4AF37;
  font-weight: 700;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const CardDesc = styled.p`
  font-size: 1.8rem;
  color: #CCCCCC;
  font-family: "Oswald", sans-serif;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.6rem;
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
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(255, 215, 0, 0.1));
  height: 4rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    border-color: #D4AF37;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
  }

  @media (min-width: 768px) {
    width: 50%;
    align-self: flex-start;
  }
`;

export const CardItemText = styled.p`
  color: #FFFFFF;
  font-size: 1.6rem;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
`;
