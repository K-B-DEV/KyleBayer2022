import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ResumeHeader from "../components/ResumeHeader";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <StyledContactPage>
        <ResumeHeader></ResumeHeader>
        <StyledFooterContainer>
          <h3>
            If you'd like to reach me, feel free to send me an email at{" "}
            <u>KyleBayerBusiness@gmail.com</u>
          </h3>
          <FontAwesomeIcon icon={faEnvelope} />
        </StyledFooterContainer>
      </StyledContactPage>
    </>
  );
};

const StyledContactPage = styled(motion.div)`
  top: 5vh;
  height: 90vh;
  max-height: 90vh;
  width: 100vw;
  left: 0;
  position: relative;

  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 5fr 1fr;

  overflow: hidden;

  @media screen and (max-width: 800px) {
    grid-template-rows: auto;
    height: auto;
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
  svg {
    color: white;
    font-size: 20rem;
    align-self: center;
    justify-self: center;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1/4;

    padding: 1em 1em 0em 1em;

    svg {
      color: white;
      font-size: 15rem;
      align-self: center;
      justify-self: center;
    }
  }
`;

export default Contact;
