import { styled, keyframes } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Keyframes for animations
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  background: ${props => props.isScrolled 
    ? 'rgba(13, 13, 13, 0.6)' 
    : 'rgba(13, 13, 13, 0.05)'};
  backdrop-filter: blur(${props => props.isScrolled ? '10px' : '0px'});
  border-bottom: ${props => props.isScrolled 
    ? '1px solid rgba(255, 183, 0, 0.09)' 
    : 'none'};
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

export const Navbar = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
`;

export const NavLogo = styled.h1`
  font-weight: 900;
  color: #FFB800;
  font-size: 2.5rem;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(255, 184, 0, 0.4);

  &:hover {
    transform: scale(1.05);
    color: #FFFFFF;
    text-shadow: 0 4px 20px rgba(255, 184, 0, 0.6);
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
`;

export const NavItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  padding-inline-start: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  position: relative;
  text-shadow: ${props => props.isScrolled 
    ? '0 2px 4px rgba(0, 0, 0, 0.5)' 
    : '0 2px 8px rgba(0, 0, 0, 0.8)'};

  &:hover {
    color: #FFB800;
    transform: translateY(-2px);
    text-shadow: 0 2px 10px rgba(255, 184, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FFB800;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HamburgerMenu = styled(GiHamburgerMenu)`
  font-size: 2rem;
  color: #FFB800;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #FFFFFF;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 3rem;
    z-index: 1001;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 2rem;
  color: white;
  display: none;
  z-index: 1000;

  position: fixed;
  top: 2rem;
  right: 2rem;

  @media (max-width: 768px) {
    display: block;
    font-size: 3rem;
  }
`;

export const MobNavContainer = styled.ul`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  align-items: stretch;
  padding-inline-start: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const MobNavItems = styled.li`
  list-style-type: none;
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};

  &.slide-in {
    animation: ${slideIn} ${(props) => props.duration} linear
      ${(props) => props.delay} both;
  }

  &.slide-out {
    animation: ${slideOut} ${(props) => props.duration} linear
      ${(props) => props.closeDelay} both;
  }
`;

export const MobNavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-family: "Spicy Rice", serif;
  letter-spacing: 2px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;
