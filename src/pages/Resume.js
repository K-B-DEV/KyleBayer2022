import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ResumeHeader from "../components/ResumeHeader";

//accordian
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid black`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#051014",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "1rem",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "2rem",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Resume = () => {
  const [expanded, setExpanded] = React.useState("");
  const [expanded2, setExpanded2] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setExpanded2("");
  };

  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
    setExpanded("");
  };

  return (
    <>
      <StyledAboutPage>
        <ResumeHeader></ResumeHeader>
        <StyledFooterContainer>
          <h3>Technical Skills</h3>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>UI / UX</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                AngularJS, ReactJS, HTML5, CSS3, JavaScript
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Backend</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>SQL, VB, VBS, C#, Oracle, Solidity</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>API Consumtion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ajax, Redux</Typography>
            </AccordionDetails>
          </Accordion>
        </StyledFooterContainer>
        <StyledFooterContainer2>
          <h3>Experience</h3>
          <Accordion
            expanded={expanded2 === "panel1"}
            onChange={handleChange2("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>
                Web Developer - Aspect Retail Logistics | August 2020 - December
                2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    While working here I taught myself a lot of C# and VB within
                    my first week of employment.
                  </li>
                  <li>
                    My first project was revamping an existing scheduling
                    program which I finished ahead of schedule. For this
                    program, I gave it a more modern look, as well I added
                    multiple pieces of new functionality.
                  </li>
                  <li>
                    Another project I completed was an automated security
                    program. This program allowed contractors and visitors to
                    sign themselves into the building which eliminated 90% of
                    the work which security had to do previously.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded2 === "panel2"}
            onChange={handleChange2("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                Web Developer - Loblaws INC | December 2020 - June 2021
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    I created and maintained schedules vbs scripts, C# and VB
                    web pages, as well as SQL tables and stored procedures.
                  </li>
                  <li>
                    On a daily basis I would work on multiple projects as well
                    as respond to and resolve support emails related to existing
                    applications.
                  </li>
                  <li>
                    I taught myself how to use Angular to create a dashboard
                    tool for operations managers to quickly leverage large
                    amounts of data. For this I used Angular Material to create
                    a modern UI and smooth UX. The data used for this
                    application was pulled from an API.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded2 === "panel3"}
            onChange={handleChange2("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                Freelance Development | June 2021 - Current Day
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>
                    Throughout my time as a Freelance developer, I’ve mainly
                    been creating single page applications using ReactJs.
                  </li>
                  <li>
                    I’ve launched my own cryptocurrency business using ReactJs
                    and Solidity to create an NFT minting application.
                  </li>
                  <li>
                    I have also written simple smart contracts for others using
                    Solidity.
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded2 === "panel4"}
            onChange={handleChange2("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                Durham College - Full Time Student | 2016 - 2020
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul>
                  <li>Computer programmer Analyst advanced diploma.</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </StyledFooterContainer2>
      </StyledAboutPage>
    </>
  );
};

const StyledAboutPage = styled(motion.div)`
  top: 10vh;
  height: 80vh;
  max-height: 120vh;
  overflow-y: auto;
  width: 100vw;
  position: absolute;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 5fr 1fr;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

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
`;

const StyledFooterContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 2/3;
  grid-column: 2/3;

  display: grid;
  align-content: start;
  row-gap: 1rem;
  padding-top: 2rem;

  h4 {
    color: #cddddd;
  }
`;

const StyledFooterContainer2 = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-row: 3/4;
  grid-column: 2/3;

  display: grid;
  align-content: start;
  row-gap: 1rem;
  padding-top: 1rem;

  h4 {
    color: #cddddd;
  }
`;

export default Resume;
