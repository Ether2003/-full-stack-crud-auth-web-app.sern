/**
 * this file is the entry point of the application
 */
import express from "express";
import cors from "cors";
import SharkRouter from "./routers/SharkRouter.js";
import AuthRouter from "./routers/AuthRouter.js";

// create an instance of express
const app = express();

// bind middleware to this application
app.use(express.json());
app.use(cors());

// bind routers to this applicaiton
app.use(SharkRouter);
app.use(AuthRouter);

// ...
app.listen(process.env.PORT || 3333, () => {
  console.log(`port opened @ ${process.env.PORT || 3333}`);
});
