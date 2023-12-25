import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((pre) => !pre);
  };

  const handleToggleLoginPage = () => {
    setLoginPage((pre) => !pre);
  };

  return (
    <>
      <Stack
        height={"100vh"}
        alignItems={"center"}
        sx={{ backgroundColor: "rgb(45, 15, 60)" }}
      >
        <Typography variant="h3" my={5} color={"pink"} textAlign={"center"}>
          {loginPage ? "Login" : "Register"} Bro !
        </Typography>
        <Stack
          flexDirection={"column"}
          gap={3}
          width={{ xs: "95%", sm: "60%", md: "40%" }}
        >
          {loginPage ? null : (
            <TextField
              type="text"
              placeholder="Enter your name..."
              sx={{ backgroundColor: "white", borderRadius: "10px" }}
            />
          )}
          <TextField
            type="email"
            placeholder="Enter your email..."
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          />
          <FormControl
            variant="standard"
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type="submit"
            size="large"
            sx={{
              backgroundColor: "rgb(46,137,90)",
              height: "60px",
              color: "#fff",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "blue",
                cursor: "pointer",
              },
            }}
          >
            {loginPage ? "Login" : "Register"}
          </Button>
          <Typography
            variant="subtitle2"
            color={"white"}
            fontSize={"1.3rem"}
            textAlign={"center"}
          >
            {loginPage
              ? "Don`t have an account ? "
              : "Already have an account ?"}{" "}
            <Box
              display={"inline"}
              size="small"
              sx={{
                color: "#8bb5df",
                fontSize: "1.3rem",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handleToggleLoginPage}
            >
              {loginPage ? "Register" : "Log in."}{" "}
            </Box>{" "}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
