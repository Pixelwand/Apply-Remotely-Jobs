import React from "react";
// import {PostJobs} from '../Jobs/PostJobs';
import { ProfileMain } from "../../Assets";

export default function Main() {
  return (
    <>
      <div className=" mb-8 flex w-full">
        <div className="flex flex-col">
          <div className="bg-indigo-900 text-white pt-20 pb-20">
            <div className="font-bold text-4xl w-full text-center mx-auto my-auto">
              Find High Paying Remote Jobs
            </div>

            <p className="text-center mt-10 mx-4 sm:mx-auto sm: sm:w-4/6 sm:justify-center sm:text-2xl  my-auto text-lg font-normal leading-9">
              Find 100+ Remote Jobs for more than 20+ category from Entry level
              to Senior level and work from anywhere.
            </p>
            <div className="text-center mt-10">
              <span className="mr-5 sm:mr-10">
                <a
                  href="/postjobs"
                  className="bg-green-600 p-4 rounded-xl font-bold font-sans sm:text-2xl"
                >
                  Post <span className="hidden sm:inline-flex">Remote</span>{" "}
                  Jobs{" "}
                </a>
              </span>
              <a
                href="/jobs"
                className="bg-green-600 p-4 rounded-xl font-bold font-sans sm:text-2xl"
              >
                Find Remote Jobs
              </a>
            </div>
          </div>
          <div className="w-full mb-28 xl:flex-row xl:flex">
            <div className="xl:basis-1/2">
              <img
                src={ProfileMain}
                className="object-fill xl:rounded-b-3xl xl:shadow-2xl"
                alt="ProfileMain"
              />
            </div>
            <div className="bg-white text-black xl:basis-1/2 xl:w-1/2 mt-4  shadow-2xl rounded-3xl xl:rounded-b-3xl pb-5">
              <div className="font-normal p-10 text-lg text-center sm:text-2xl">
                I felt like I couldn’t find qualified candidates until I moved
                to Kriyax. Now I am encouraged to find more qualified candidates
                with Apply Remotely Jobs.
              </div>
              <div className="font-bold text-base text-center sm:text-2xl">
                Deependra Kumar
              </div>
              <div className="font-medium text-center py-3 sm:text-2xl">
                CEO @KRIYAX
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
