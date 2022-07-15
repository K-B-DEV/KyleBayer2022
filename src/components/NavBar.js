import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuOpen,
  Home,
  QuestionMark,
  MenuBook,
  Email,
  GitHub,
  Login,
  Badge,
} from "@mui/icons-material";

//Drawer
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

//custom window dimension hook
import useWindowDimensions from "../hooks/getWindowDimensions";

const NavBar = () => {
  //Window dimensions
  const { height, width } = useWindowDimensions();
  //Drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <QuestionMark />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/resume">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary={"Resume"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/contact">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <a href="https://github.com/K-B-DEV" target="_blank">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary={"Github"} />
            </ListItemButton>
          </ListItem>
        </a>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Badge />
            </ListItemIcon>
            <ListItemText primary={"Sign Up"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <StyledNavContainer>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        <StyledNavGrid>
          <StyledLogo>
            <h2>Kyle Bayer</h2>
          </StyledLogo>
          {width >= 800 ? (
            <>
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
                {/* {state.left ? (
              <MenuOpen />
            ) : (
              <Menu onClick={toggleDrawer("left", true)} />
            )} */}
              </StyledGithub>
            </>
          ) : (
            <StyledGithub>
              {state.left ? (
                <MenuOpen />
              ) : (
                <Menu onClick={toggleDrawer("left", true)} />
              )}
            </StyledGithub>
          )}
        </StyledNavGrid>
      </StyledNavContainer>
    </>
  );
};

const StyledDrawer = styled(motion.Drawer)`
  /* z-index: 10; */
`;

const StyledNavContainer = styled(motion.div)`
  height: 5vh;
  width: 100vw;
  position: absolute;
  background-color: #051014;
  z-index: 2;

  display: grid;
  /* grid-template-rows: 1fr;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr; */

  grid-template-rows: 1fr;
  grid-template-columns: 1fr 5fr 1fr;
`;

const StyledNavGrid = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 2/3;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr;

  div {
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    grid-row: 1/2;
    grid-column: 1/4;
  }
`;

const StyledLogo = styled(motion.div)`
  grid-row: 1/2;
  grid-column: 1/2;
  align-self: center;
  justify-self: start;

  @media screen and (max-width: 1000px) {
    padding-left: 1em;
  }
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

  @media screen and (max-width: 1000px) {
    padding-right: 1em;
  }
`;
export default NavBar;
