import { Grid, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDeleteTaskMutation, useUpdateTaskMutation } from "../redux/service";
import { MdDone } from "react-icons/md";

const Task = ({ no, title }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [edit, setEdit] = useState(false);

  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const handleEdit = async () => {
    setEdit((pre) => !pre);
  };

  const handleUpdate = async () => {
    setEdit((pre) => !pre);
    const data = {
      newTask: newTitle,
      oldTask: title,
    };
    await updateTask(data);
  };

  const handleDelete = async () => {
    const data = {
      task: title,
    };
    await deleteTask(data);
  };

  return (
    <>
      <Grid container gap={3} fontSize={"1.3rem"}>
        <Grid
          item
          xs={2}
          bgcolor={"white"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"10px"}
          maxHeight={"100%"}
          p={3}
        >
          {no ? no + 1 : 1}
        </Grid>
        <Grid
          item
          xs={8}
          md={9}
          bgcolor={"white"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={2}
          borderRadius={"10px"}
          p={3}
        >
          <TextField
            variant="standard"
            multiline
            value={newTitle ? newTitle : ""}
            InputProps={{ disableUnderline: true }}
            aria-readonly={edit ? true : false}
            onChange={edit ? (e) => setNewTitle(e.target.value) : null}
            autoFocus={edit ? true : false}
            sx={{ outlineColor: "blue" }}
          />
          <Stack
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            sx={{ cursor: "pointer" }}
          >
            {edit ? (
              <MdDone size={24} onClick={handleUpdate} />
            ) : (
              <FiEdit size={24} onClick={handleEdit} />
            )}
            <MdDelete size={24} onClick={handleDelete} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
