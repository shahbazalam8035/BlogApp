const express = require("express");
const { getAllBlogsController, getBlogByIdController, createBlogController, updateBlogController, deleteBlogController, getUserBlogController } = require("../controllers/blog.controller");

// router objects
const router=express.Router()

// get all blogs
router.get("/all-blogs",getAllBlogsController)

// get single blog by id
router.get("/get-blog/:id",getBlogByIdController)

// post blog
router.post("/create-blog",createBlogController)

// update blog
router.patch("/update-blog/:id",updateBlogController)

// delte blog
router.delete("/delete-blog/:id",deleteBlogController)

//get user blog
router.get("/user-blog/:id",getUserBlogController) 

module.exports= router;
