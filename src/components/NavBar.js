import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNavContainer>
      <StyledLogo>
        <h2>Kyle Bayer</h2>
      </StyledLogo>
      <StyledHome>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </StyledHome>
      <StyledAbout>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </StyledAbout>
      <StyledResume>
        <Link to="/resume">
          <h3>Resume</h3>
        </Link>
      </StyledResume>
      <StyledContact>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </StyledContact>
      <StyledGithub>
        <a href="https://github.com/K-B-DEV" target="_blank">
          <h3>Github</h3>
        </a>
      </StyledGithub>
    </StyledNavContainer>
  );
};

const StyledNavContainer = styled(motion.div)`
  height: 10vh;
  width: 100vw;
  position: absolute;
  background-color: #051014;
  z-index: 2;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr;
`;

const StyledLogo = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: start;
  padding-left: 1rem;
`;

const StyledHome = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  align-self: center;
  justify-self: end;
`;

const StyledAbout = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 3/4;
  align-self: center;
  justify-self: end;
`;

const StyledResume = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 4/5;
  align-self: center;
  justify-self: end;
`;

const StyledContact = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 5/6;
  align-self: center;
  justify-self: end;
`;

const StyledGithub = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 6/7;
  align-self: center;
  justify-self: end;
  padding-right: 1rem;
`;
export default NavBar;
