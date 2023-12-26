const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");
const router = require("./route");
const cookieParser = require("cookie-parser");


dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`app is listenening on PORT : ${port}`);
});
