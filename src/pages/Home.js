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
  function newImageUrl() {
    var min = 1057;
    var max = 1083;
    var difference = max - min;
    var randomNumber = Math.random() * difference;
    randomNumber = Math.floor(randomNumber) + min;
    setImgUrl1("https://picsum.photos/id/" + randomNumber + "/1000/400");
    console.log("https://picsum.photos/id/" + randomNumber + "/1000/400");

    randomNumber = randomNumber + 1;
    setImgUrl2("https://picsum.photos/id/" + randomNumber + "/1000/400");
    console.log("https://picsum.photos/id/" + randomNumber + "/1000/400");

    randomNumber = randomNumber + 1;
    setImgUrl3("https://picsum.photos/id/" + randomNumber + "/1000/400");
    console.log("https://picsum.photos/id/" + randomNumber + "/1000/400");
  }

  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [imgUrl3, setImgUrl3] = useState("");
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();

  const fetchImage1 = async () => {
    const response = await fetch(imgUrl1);
    const imageBlob = await response.blob();
    const imageObjUrl = URL.createObjectURL(imageBlob);
    setImg1(imageObjUrl);
  };

  const fetchImage2 = async () => {
    const response = await fetch(imgUrl2);
    const imageBlob = await response.blob();
    const imageObjUrl = URL.createObjectURL(imageBlob);
    setImg2(imageObjUrl);
  };

  const fetchImage3 = async () => {
    const response = await fetch(imgUrl3);
    const imageBlob = await response.blob();
    const imageObjUrl = URL.createObjectURL(imageBlob);
    setImg3(imageObjUrl);
  };

  useEffect(() => {
    newImageUrl();
    fetchImage1();
    fetchImage2();
    fetchImage3();
  }, []);

  return (
    <>
      <StyledPageGrid>
        <StyledPageContainer>
          <h1>Kyle Bayer</h1>
          <h2>Professional Web Services</h2>
          <h4>
            (These background images are randomly selected using picsum.photos)
          </h4>
        </StyledPageContainer>
        <StyledImageContainer>
          <Carousel className="carouselWidth">
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
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
  height: 80vh;
  max-height: 80vh;
  width: 100vw;
  top: 10vh;
  left: 0;
  position: relative;

  display: grid;
  grid-template-rows: 1fr 1.5fr;
  grid-template-columns: 1fr;
  overflow: hidden;
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
    height: 30vh;
    object-fit: cover;
    overflow: hidden;
  }
  overflow: hidden;
`;
export default Home;
