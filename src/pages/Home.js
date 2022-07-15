import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faRankingStar,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";

import defImg from "../images/default.jpg";

const Home = () => {
  return (
    <>
      <StyledPageGrid>
        <StyledPageContainer>
          <h1>Kyle Bayer</h1>
          <h2>Professional Web Services</h2>
          {/* <h5>(images are randomly selected using picsum.photos)</h5> */}
        </StyledPageContainer>
        <StyledImageContainer>
          <Carousel className="carouselWidth">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1920/610?random"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1920/611?random"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/1920/612?random"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </StyledImageContainer>
        <StyledCardsContainer>
          <StyledCard>
            <StyledCardPicute>
              <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon>
            </StyledCardPicute>
            <StyledCardContent>
              <h3>Very fast data services.</h3>
              <h4>Fast loading services reduces user wait time.</h4>
            </StyledCardContent>
          </StyledCard>
          <StyledCard>
            <StyledCardPicute>
              <FontAwesomeIcon icon={faRankingStar}></FontAwesomeIcon>
            </StyledCardPicute>
            <StyledCardContent>
              <h3>Modern and responsive web pages.</h3>
              <h4>Responsive, fast loading and beautifully simple designs.</h4>
            </StyledCardContent>
          </StyledCard>
          <StyledCard>
            <StyledCardPicute>
              <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            </StyledCardPicute>
            <StyledCardContent>
              <h3>New technologies.</h3>
              <h4>
                I'm enjoy researching new tools to make web applications more
                efficient.
              </h4>
            </StyledCardContent>
          </StyledCard>
        </StyledCardsContainer>
      </StyledPageGrid>
    </>
  );
};

const StyledPageGrid = styled(motion.div)`
  height: 90vh;
  max-height: 90vh;
  width: 100vw;
  top: 5vh;
  left: 0;
  position: relative;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    height: auto;
    max-height: auto;
    overflow-y: visible;
    overflow-x: hidden;
  }
`;
const StyledPageContainer = styled(motion.div)`
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  pointer-events: none;

  @media screen and (max-width: 800px) {
    overflow: visible;
  }
`;

const StyledCardsContainer = styled(motion.div)`
  grid-row: 2/3;
  height: 50vh;
  width: 100%;
  z-index: 2;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  /* padding: 1rem 0rem 1rem 0rem; */
  overflow: hidden;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    overflow: visible;
    height: 110%;
    row-gap: 1em;
    padding: 1em 0em 1em 0em;
  }
`;

const StyledCard = styled(motion.div)`
  height: 90%;
  width: 90%;
  z-index: 2;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  align-self: center;
  justify-self: center;

  border-radius: 16px;
  border: 1px solid white;
  /* background-color: #acbdba; */

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;
const StyledCardPicute = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  svg {
    color: white;
    height: 6rem;
  }
`;
const StyledCardContent = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 1/2;
  align-self: start;
  justify-self: center;
  h3,
  h4 {
    text-align: center;
  }
  /* h5 {
    padding: 0em 1em 0em 1em !important;
  } */
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const StyledImageContainer = styled(motion.div)`
  grid-row: 1/2;
  height: 100%;
  width: 100%;
  height: auto;
  z-index: 1;

  display: grid;
  grid-row: 1/2;
  grid-column: 1/2;

  align-content: center;
  justify-items: center;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    overflow: hidden;
  }
  overflow: hidden;
`;
export default Home;
