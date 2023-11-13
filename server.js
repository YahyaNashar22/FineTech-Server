import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
