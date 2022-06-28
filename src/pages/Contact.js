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
  top: 10vh;
  height: 80vh;
  width: 100vw;
  position: absolute;

  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr 5fr 1fr;
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
`;

export default Contact;
