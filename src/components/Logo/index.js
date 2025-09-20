import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  font-weight: 900;
  font-size: ${props => props.size || "3rem"};
  letter-spacing: 8px;
  text-transform: uppercase;
  color: #000000;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #333333;
  }

  @media (max-width: 600px) {
    font-size: ${props => props.mobileSize || "2rem"};
    letter-spacing: 4px;
  }
`;

const LogoText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.9;
`;

const EchoText = styled.div`
  display: flex;
  gap: 2px;
`;

const EchoLetter = styled.span`
  display: inline-block;
  background: ${props => props.isWhite ? "#FFFFFF" : "#000000"};
  color: ${props => props.isWhite ? "#000000" : "#FFFFFF"};
  padding: ${props => props.isSmall ? "4px 8px" : "8px 12px"};
  border-radius: ${props => props.isSmall ? "4px" : "8px"};
  font-weight: 900;
  font-size: ${props => props.isSmall ? "0.8em" : "1em"};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OhText = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 2px;
`;

const AdvertisingText = styled.div`
  font-size: 0.3em;
  font-weight: 600;
  letter-spacing: 4px;
  color: #FFFFFF;
  background: #000000;
  padding: 4px 12px;
  border-radius: 20px;
  margin-top: 8px;
  opacity: 0.9;
`;

const EA = ({ size, mobileSize }) => {
  return (
    <LogoContainer size={size} mobileSize={mobileSize}>
      <LogoText>
        <EchoText>
          <EchoLetter>E</EchoLetter>
          <EchoLetter isWhite>C</EchoLetter>
          <EchoLetter>H</EchoLetter>
        </EchoText>
        <OhText>
          <EchoLetter>O</EchoLetter>
          <EchoLetter isWhite>H</EchoLetter>
        </OhText>
        <AdvertisingText>ADVERTISING</AdvertisingText>
      </LogoText>
    </LogoContainer>
  );
};

export default EA;
