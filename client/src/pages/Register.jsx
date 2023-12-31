import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLoginMutation, useRegisterMutation } from "../redux/service";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();

  const handleShowPassword = () => {
    setShowPassword((pre) => !pre);
  };

  const handleToggleLoginPage = () => {
    setLoginPage((pre) => !pre);
  };

  const handleLogin = async () => {
    const body = {
      email,
      password,
    };
    const result = await login(body);
    if (result?.data) {
      toast.success(result.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
    if (result?.error) {
      toast.error(result.error.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  };

  const handleRegister = async () => {
    const data = {
      name,
      email,
      password,
    };
    const result = await register(data);
    if (result?.data) {
      toast.success(result.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
    if (result?.error) {
      toast.error(result.error.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
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
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <TextField
            type="email"
            placeholder="Enter your email..."
            sx={{ backgroundColor: "white", borderRadius: "10px" }}
            onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={loginPage ? handleLogin : handleRegister}
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
