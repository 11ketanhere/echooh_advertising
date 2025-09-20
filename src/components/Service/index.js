import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ServiceContainer,
  LeftContainer,
  Title,
  Heading,
  ServiceCardContainer,
  ServiceCard,
  Image,
  CardHeading,
  CardDesc,
  CardListContainer,
  CardListItem,
  CardItemText,
} from "./style";
const Service = () => {
  AOS.init();
  return (
    <ServiceContainer id="service">
      <LeftContainer>
        <Title data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
          SERVICES
        </Title>
        <Heading
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          Outdoor advertising solutions that connect brands with audiences in the most impactful way
        </Heading>
      </LeftContainer>
      <ServiceCardContainer>
        <ServiceCard
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image src="https://cdn.sanity.io/images/y1prohws/production/1ee2839d9f4f3d19a08d9160d4b464a3dcedfb25-70x65.svg" />
          <CardHeading>What we can do for you</CardHeading>
          <CardDesc>
            Deliver innovative, high-visibility campaigns across multiple outdoor platforms. Here are
            the services we provide
          </CardDesc>
          <CardListContainer>
            <CardListItem>
              <CardItemText>Billboard Advertising</CardItemText>
            </CardListItem>
            <CardListItem>
              <CardItemText>Transit Media Solutions</CardItemText>
            </CardListItem>
            <CardListItem>
              <CardItemText>Mall Branding & Activations</CardItemText>
            </CardListItem>
            <CardListItem>
              <CardItemText>Airport Advertising</CardItemText>
            </CardListItem>
          </CardListContainer>
        </ServiceCard>
        <ServiceCard
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image src="https://cdn.sanity.io/images/y1prohws/production/167e91631a7731d5a4301f798b8444131b08dad1-69x68.svg" />
          <CardHeading>What you can expect</CardHeading>
          <CardDesc>
            We offer end-to-end media planning, creative design, and flawless execution that ensures your brand stands out — loud, clear, and unforgettable
          </CardDesc>
          <CardListContainer>
            <CardListItem>
              <CardItemText>End-to-End Media Planning</CardItemText>
            </CardListItem>
            <CardListItem>
              <CardItemText>Creative Design Excellence</CardItemText>
            </CardListItem>
            <CardListItem>
              <CardItemText>Flawless Campaign Execution</CardItemText>
            </CardListItem>
          </CardListContainer>
        </ServiceCard>
      </ServiceCardContainer>
    </ServiceContainer>
  );
};

export default Service;
