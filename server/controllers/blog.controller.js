const mongoose = require("mongoose");
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");
// get all blogs blog
exports.getAllBlogsController = async (req, res) => {
  try {
    const allBlogs = await blogModel.find({}).populate("user");
    if (!allBlogs) {
      return res.status(200).send({
        success: false,
        message: " no blogs found",
      });
    }
    return res.status(200).send({
      success: true,
      message: " all blogs  list",
      allBlogs,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in get all blogs",
      error,
    });
  }
};

// create blog
exports.createBlogController = async (req, res) => {
  try {
    const { title, description, image, user } = req.body;
    if (!title || !description || !image || !user) {
      return res.status(400).send({
        success: false,
        message: "please fill all fields",
      });
    }
    const existingUser = await userModel.findById(user);
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "unable to find user",
      });
    }
    const newBlog = new blogModel({ title, description, image, user });
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blogs.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "blog created",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "error in creating blogs",
      success: false,
      error,
    });
  }
};

// get single blog
exports.getBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!id) {
      return res.status(200).send({
        success: false,
        message: "blog not found with this id!",
        blog,
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog!",
      blog,
    });
  } catch (error) {
    return res.status(200).send({
      success: true,
      message: "error while getting single blog!",
    });
  }
};

// update blog
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    // const {title,description,image}=req.body
    const blog = await blogModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send({
      success: true,
      message: "blog updated!",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error while updating blog",
      error,
    });
  }
};

// delete blog
exports.deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findOneAndDelete(id).populate("user");
    await blog.user.blogs.pull(blog);
    await blog.user.save();
    return res.status(201).send({
      success: true,
      message: "blog deleted",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error while deleting blog",
    });
  }
};

// user blog
exports.getUserBlogController=async(req,res)=>{
try {
    const userBlog= await userModel.findById(req.params.id).populate("blogs")
    if(!userBlog){
        return res.status(404).send({
            success:false,
            message:"blogs not found with this id"
        })
    }
    return res.status(200).send({
        success:true,
        message:"user blog",
        userBlog
    })
} catch (error) {
    return res.status(400).send({
        success: false,
        message: "error in user blog",
      });
}
}
