import express from "express";
import cors from 'cors'
import userRouter from "./user.js";
import loginRouter from "./login.js";

const port = 8800;
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(loginRouter);


app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);

})
