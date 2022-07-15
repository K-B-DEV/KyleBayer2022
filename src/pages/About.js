import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ResumeHeader from "../components/ResumeHeader";

const About = () => {
  return (
    <>
      <StyledAboutPage>
        <ResumeHeader></ResumeHeader>
        <StyledFooterContainer>
          <h3>Who am I?</h3>
          <h4>I'm a web developer from Ajax, Ontario.</h4>
          <h4>
            I have a passion for creating web based applications from the ground
            up.
          </h4>
          <h4>
            I'm a fast learner who enjoys jumping into new technologies and
            learning to use them to my advantage.
          </h4>
          <h4>
            I specialize in web based solutions from design to deployment. I
            create web applications that consume REST API's to produce fast
            loading, responsive and modern looking applications.
          </h4>
        </StyledFooterContainer>
      </StyledAboutPage>
    </>
  );
};

const StyledAboutPage = styled(motion.div)`
  height: 90vh;
  max-height: 90vh;
  width: 100vw;
  top: 5vh;
  left: 0;
  position: relative;

  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 5fr 1fr;

  overflow: hidden;

  @media screen and (max-width: 800px) {
    grid-template-rows: auto;
    height: auto;
    overflow-y: visible;
    overflow-x: hidden;
  }
`;

const StyledFooterContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  grid-column: 2/3;

  display: grid;
  align-content: start;
  row-gap: 1rem;
  padding-top: 1rem;

  h4 {
    color: #cddddd;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1/4;

    padding: 1em 1em 0em 1em;
  }

  @media screen and (max-width: 800px) {
    height: auto;
    max-height: auto;
    /* overflow-y: visible;
    overflow-x: hidden; */
  }
`;

export default About;
