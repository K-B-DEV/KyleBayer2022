import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <h3>KyleBayer.com @ {new Date().getFullYear()}</h3>
    </StyledFooterContainer>
  );
};

const StyledFooterContainer = styled(motion.div)`
  height: 5vh;
  width: 100vw;
  background-color: #051014;
  bottom: 0;
  left: 0;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;

  z-index: 2;

  h3 {
    font-size: 20px;
  }
`;

export default Footer;
