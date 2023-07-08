import { Resone, Restwo, Resthree } from "../../assets";
import React from "react";

export default function Resources() {
  return (
    <>
      <div className="flex justify-center flex-row mx-auto w-full mt-32 ">
        <div className="basis-1/2 text-xl">
          <div className="text-3xl font-sans font-bold">Resources</div>
        </div>
        <div className="">
          <button className="basis-1/2 rounded-5 bg-blue-700 text-white px-8  py-4 hover:bg-blue-800">
            Get Started
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col xl:flex-row justify-center gap-20 mx-auto px-4 sm:px-6 xl:mt-12">
        <div className="basis-1/4">
          <div>
            <img
              src={Resone}
              className="w-76 h-80 top-6 left-6 rounded-xl"
              alt="Resource one"
            />
          </div>
          <div className="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
            <h2 className="font-bold text-2xl mb-5">
              A high converting, high-performing and highly qualified candidates
            </h2>
            <div>
              <p>
                Turpis senectus amet tortor in sodates odio tettus. Pretium id
                amet, euismod sceteriscue vetit.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-gray-200 py-3 px-5 font-medium hover:bg-gray-500">
              Read more
            </button>
          </div>
        </div>
        <div className="basis-1/4">
          <div>
            <img
              src={Restwo}
              alt="Resource two"
              className="w-76 rounded-xl h-80 top-6 left-6"
            />
          </div>
          <div className="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
            <h2 className="font-bold text-2xl mb-5">
              With a clean, minimal and professional process
            </h2>
            <div>
              <p>
                Turpis senectus amet tortor in sodates odio tettus. Pretium id
                amet, euismod sceteriscue vetit.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-gray-200 py-3 px-5 font-medium hover:bg-gray-500">
              Read more
            </button>
          </div>
        </div>
        <div className="basis-1/4">
          <div>
            <img
              src={Resthree}
              alt="Resource three"
              className="w-76 rounded-xl h-80 top-6 left-6"
            />
          </div>
          <div className="w-76 h-43 pr-4.5 pl-0 pt-0 pb-0 mt-8">
            <h2 className="font-bold text-2xl mb-5">
              Apply Remotely Jobs made your remote job possible
            </h2>
            <div>
              <p>
                Turpis senectus amet tortor in sodates odio tettus. Pretium id
                amet, euismod sceteriscue vetit.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-gray-200 py-3 px-5 font-medium hover:bg-gray-500">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
