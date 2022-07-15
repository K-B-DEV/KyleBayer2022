import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const ResumeHeader = () => {
  return (
    <StyledHeaderContainer>
      <h3>Kyle Bayer</h3>
      <h4>Ajax, Ontario Canada</h4>
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid white;

  display: grid;
  align-content: end;
  row-gap: 1rem;
  padding-bottom: 1rem;

  h4 {
    color: #cddddd;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1/4;

    /* padding: 0em 1em 0em 1em; */
    width: 96%;
    align-self: center;
    justify-self: center;
  }

  @media screen and (max-width: 800px) {
    padding-top: 1em;
  }
`;

export default ResumeHeader;
