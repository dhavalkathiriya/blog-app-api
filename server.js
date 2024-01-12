
import express from 'express'
import cors from 'cors'
import dbConnect from './db/db.js';
import { PORT } from './config/index.js';
import userRoute from './routes/userRoutes.js';
import blogRoute from './routes/blogRoutes.js';

//mongodb connection
dbConnect()

//rest objecct
const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/user", userRoute);
app.use("/api/blog", blogRoute);

//listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port no ${PORT}`);
});
