import React from "react";
import {
  AboutContainer,
  LeftContainer,
  RightContainer,
  Title,
  Text,
  Highlight,
  SubTitle,
  SkillContainer,
  SkillList,
  SkillListItem,
  SkillImage,
  SkillName,
  ExperienceTitle,
  Experience,
  ExperienceHeading,
  ExperienceText,
  ExperienceText2,
} from "./style";

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <LeftContainer>
          <Title
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            About
          </Title>
          <Text
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            Echooh Advertising is a <Highlight>creative outdoor advertising agency</Highlight>{" "}
            specializing in <Highlight>360-degree outdoor solutions</Highlight> that connect brands with audiences in the most impactful way. We craft{" "}
            <Highlight>innovative, high-visibility campaigns</Highlight> across multiple outdoor platforms, including billboards, transit media, mall branding, airport ads, and experiential activations.
          </Text>
          <ExperienceTitle
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Our Expertise
          </ExperienceTitle>
          <Experience
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <ExperienceHeading>Outdoor Advertising Excellence</ExperienceHeading>
            <ExperienceText>Billboards, Transit Media & Mall Branding</ExperienceText>
            <ExperienceText2>5+ Years of Experience</ExperienceText2>
          </Experience>
          <Experience
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="1100"
          >
            <ExperienceHeading>
              End-to-End Media Planning
            </ExperienceHeading>
            <ExperienceText>Creative Design, Media Planning & Flawless Execution</ExperienceText>
            <ExperienceText2>200+ Successful Campaigns</ExperienceText2>
          </Experience>
        </LeftContainer>
        <RightContainer>
          <SubTitle
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            Services
          </SubTitle>
          <SkillContainer>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/9XKb9877/Figma.png" />
              </SkillListItem>
              <SkillName>Billboard Advertising</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/tgsCK0QC/python.png" />
              </SkillListItem>
              <SkillName>Transit Media</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/x1hWJ48c/js.png" />
              </SkillListItem>
              <SkillName>Mall Branding</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/L6YsrGcs/physics.png" />
              </SkillListItem>
              <SkillName>Airport Advertising</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/t4FFHsK7/html-5.png" />
              </SkillListItem>
              <SkillName>Experiential Activations</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/tCcHHT30/css-3.png" />
              </SkillListItem>
              <SkillName>Media Planning</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/wTw4CGd7/nodejs.png" />
              </SkillListItem>
              <SkillName>Creative Design</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/GtP33sCh/Express.png" />
              </SkillListItem>
              <SkillName>Brand Strategy</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/g0GVGvbr/MongoDB.png" />
              </SkillListItem>
              <SkillName>Campaign Execution</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/Qx09cv2N/SQLite.png" />
              </SkillListItem>
              <SkillName>Outdoor Analytics</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/cLWW4J9r/MySQL.png" />
              </SkillListItem>
              <SkillName>Location Intelligence</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1300"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/sDyHMZzd/Redux.png" />
              </SkillListItem>
              <SkillName>360° Solutions</SkillName>
            </SkillList>
          </SkillContainer>
        </RightContainer>
      </AboutContainer>
    </>
  );
};

export default About;
