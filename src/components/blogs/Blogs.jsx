import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blogs/blog1.jpg";
import Img2 from "../../assets/blogs/blog2.jpg";
import Img3 from "../../assets/blogs/blog3.jpg";

const Blogs = () => {
  return (
      <div className="dark:bg-gray-900 dark:text-white">
        <section data-aos="fade-up" className="container mb-10 py-8">
          <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            Verified Content Creator
          </h1>
          <div className="flex justify-center mb-6">
            <Link
                to="/verified-content-creator"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all hover:bg-blue-700"
            >
              View More
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BlogCard Img={Img1} />
            <BlogCard Img={Img2} />
            <BlogCard Img={Img3} />
          </div>
        </section>
      </div>
  );
};

export default Blogs;
