import React from "react";
import BlogsCategorys from "./BlogsCategorys";

const Blogs = () => {
    return (
        <div>
            <div className="py-44  text-center text-black px-4">
                <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
                    Blog Pagess
                </h2>
            </div>
            {/* all blogs container*/}
            <div className="max-w-7xl mx-auto">
                <BlogsCategorys/>
            </div>
            
        </div>
    );
};

export default Blogs;
