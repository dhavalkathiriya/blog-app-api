import express from "express";
import {
  createBlogController,
  deleteBlogController,
  getAllBlogsController,
  getBlogByIdController,
  updateBlogController,
  userBlogControlller,
} from "../controllers/blogControlller.js";
//router object
const blogRoute = express.Router();

//routes
// GET || all blogs
blogRoute.get("/", getAllBlogsController);

//POST || create blog
blogRoute.post("/create", createBlogController);

//PUT || update blog
blogRoute.put("/update/:id", updateBlogController);

//GET || SIngle Blog Details
blogRoute.get("/get-blog/:id", getBlogByIdController);

//DELETE || delete blog
blogRoute.delete("/delete/:id", deleteBlogController);

//GET || user blog
blogRoute.get("/user-blog/:id", userBlogControlller);

export default blogRoute;
