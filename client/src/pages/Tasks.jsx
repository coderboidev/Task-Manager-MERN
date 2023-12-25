import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Task from "../components/Task";
import { useState } from "react";

const Tasks = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack
        height={"100vh"}
        overflow={"hidden"}
        sx={{ backgroundColor: "rgb(45, 15, 60)", position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          gap={3}
          width={{ xs: "95%", md: "50%" }}
          height={"100%"}
          mx={"auto"}
          my={2}
          position={"relative"}
        >
          <Typography variant="h3" sx={{ color: "#d9cee2" }} my={1}>
            Task Manager
          </Typography>
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: "55%",
            }}
          >
            <Stack flexDirection={"column"} gap={2}>
              <Task />
              <Task />
            </Stack>
          </Box>
          <FormControl
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              position: "absolute",
              bottom: "50px",
              width: "95%",
            }}
          >
            <OutlinedInput
              id="input"
              type="text"
              placeholder="Write a Task ✍🏻..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <IoAddCircle size={40} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
        <Box
          position={"absolute"}
          right={40}
          top={20}
          onClick={handleOpen}
          sx={{ cursor: "pointer" }}
        >
          <GiHamburgerMenu size={40} color="#fff" />
        </Box>
        <Menu
          anchorEl={open}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Alert Name</MenuItem>
          <MenuItem onClick={handleClose}>Alert Email</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Stack>{" "}
    </>
  );
};

export default Tasks;
