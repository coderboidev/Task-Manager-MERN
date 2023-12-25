import { Grid } from "@mui/material";

const Task = () => {
  return (
    <>
      <Grid container gap={3} height={60} fontSize={"1.3rem"}>
        <Grid
          item
          xs={2}
          bgcolor={"white"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"10px"}
          maxHeight={"100%"}
        >
          1
        </Grid>
        <Grid
          item
          xs={8}
          md={9}
          bgcolor={"white"}
          display={"flex"}
          alignItems={"center"}
          px={2}
          borderRadius={"10px"}
        >
          This is Task 1.
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
