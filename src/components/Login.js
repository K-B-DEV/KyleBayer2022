import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

//inputs
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Key } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Login({ isLogin, setIsLogin }) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <StyledLoginContainer>
      <StyledRegister>
        <h2>Login</h2>
      </StyledRegister>
      <FormControl variant="standard">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          style={{ color: "white" }}
        >
          Enter your email
        </InputLabel>
        <Input
          style={{ color: "white" }}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel
          htmlFor="input-with-icon-adornment"
          style={{ color: "white" }}
        >
          Enter your password
        </InputLabel>
        <Input
          style={{ color: "white" }}
          id="input-with-icon-adornment"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          startAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="start"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button variant="outlined" startIcon={<Key />}>
        Login
      </Button>
      <StyledLineBreak />
      <StyledRegister>
        <h5 onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
          Don't have an account? Click here to register
        </h5>
      </StyledRegister>
    </StyledLoginContainer>
  );
}

const StyledLoginContainer = styled(motion.div)`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  border: 1px solid white;
  border-radius: 16px;
  padding: 1em 2em 1em 2em;
  row-gap: 1em;
`;

const StyledRegister = styled(motion.div)`
  align-self: center;
  justify-self: center;
`;

const StyledLineBreak = styled(motion.div)`
  height: 1px;
  width: 90%;
  background: white;
  align-self: center;
  justify-self: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default Login;
