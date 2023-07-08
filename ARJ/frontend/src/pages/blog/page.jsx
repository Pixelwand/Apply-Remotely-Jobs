import React from "react";
import Blogs from "./blogs.json";
import { Header } from "src/components";
import { Newsletter } from "src/Newsletter/Newsletter";
export const Blog = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-col pt-20 text-center gap-10">
        <div className="">
          <h3 className="text-3xl my-5 ">Blogs</h3>
          <Newsletter />
        </div>
        <div>
          <p className="text-xl font-semibold">
            New product features, the latest in technology solutions, and
            updates.
          </p>
        </div>
        {Blogs.map((blog) => (
          <div key={Blogs.id} className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center gap-5">
              <img src={blog.image} alt="" className="w-96 h-96 object-cover" />
              <h3 className="text-3xl">{blog.title}</h3>
              <p className="text-xl">{blog.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
