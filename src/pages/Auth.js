import { styled } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

import Login from "../components/Login";
import Register from "../components/Register";

import { Login as LoginIco, Badge } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Auth() {
  //Register + login state
  const [isLogin, setIsLogin] = useState(true);

  return (
    <StyledAuthPage>
      <StyledLoginContainer>
        {isLogin ? (
          <Login isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <Register isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
        {/* <Login isLogin={isLogin} setIsLogin={setIsLogin} /> */}
      </StyledLoginContainer>
    </StyledAuthPage>
  );
}

const StyledAuthPage = styled(motion.div)`
  top: 5vh;
  left: 0;
  position: relative;
  height: 90vh;

  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledLoginContainer = styled(motion.div)`
  grid-row: 2/3;
  grid-column: 2/3;
`;
export default Auth;
