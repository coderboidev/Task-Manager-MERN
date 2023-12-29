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
import {  useState } from "react";
import {
  useAddTaskMutation,
  useGetUserDetailsQuery,
  useLogoutMutation,
} from "../redux/service";

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorE1] = useState(false);
  const [logout] = useLogoutMutation();
  const [title, setTitle] = useState("");

  const [addTask] = useAddTaskMutation();
  const { data } = useGetUserDetailsQuery();

  const handleAddTask = async () => {
    const data = {
      task: title,
    };
    await addTask(data);
    setTitle("");
  };
  const handleOpen = (e) => {
    setAnchorE1(e.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleName = async () => {
    handleClose();
    alert(token?.name);
  };
  const handleEmail = async () => {
    handleClose();
    alert(token?.email);
  };
  const handleLogout = async () => {
    await logout();
    handleClose();
  };

  if (data) {
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
              <Stack flexDirection={"column"} gap={2} >
                {data ? (
                  data.tasks?.length > 0 ? (
                    data?.tasks?.map((e, i) => {
                      return <Task key={e} no={i} title={e} />;
                    })
                  ) : (
                    <Typography
                      variant="h6"
                      textAlign={"center"}
                      color={"white"}
                    >
                      No task yet !
                    </Typography>
                  )
                ) : null}
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
                    <IconButton edge="end" onClick={handleAddTask}>
                      <IoAddCircle size={40} />
                    </IconButton>
                  </InputAdornment>
                }
                onChange={(e) => setTitle(e.target.value)}
                value={title ? title : ""}
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
            anchorEl={anchorEl}
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
            <MenuItem onClick={handleName}>Alert Name</MenuItem>
            <MenuItem onClick={handleEmail}>Alert Email</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Stack>{" "}
      </>
    );
  }
};

export default Tasks;
