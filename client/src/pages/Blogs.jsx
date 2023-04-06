import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/blog/all-blogs"
      );
      if (data?.success) {
        setBlogs(data?.allBlogs);
        console.log(blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className="mt-20 flex flex-col justify-center">
      {blogs &&
        blogs.map((blog, id) => (
          <BlogCard
            key={id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            time={blog.createdAt}
          />
        ))}
    </div>
  );
};

export default Blogs;
