import React from "react";

export const Newsletter = () => {
  const handleSubmit = async () => {
    await fetch("https://apply-remote-jobs.onrender.com/user/subscribe", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then(() => {
      console.log("User subscribed successfully");
    });
  };
  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="lg:flex lg:flex-row lg:gap-20 lg:justify-center">
            <input
              type="email"
              onChange={(e) => e.target.email}
              placeholder="Enter your email"
              className="bg-[#0A142F] border-2 border-[#FBBF24] rounded-md px-5 py-2 space-x-24 outline-none"
            />
            <button
              type="submit"
              className="bg-[#FBBF24] text-black px-5 py-2 rounded-md ml-5"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
