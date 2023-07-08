import React from "react";
import { Link } from "react-router-dom";
import { Newsletter } from "../../Newsletter/Newsletter";

const button = [
  { name: "Get Jobs", href: "/jobs" },
  { name: "Post Jobs", href: "/postjobs" },
];

const items = [
  {
    Navigation: [
      { name: "Jobs", href: "/jobs" },
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Candidates", href: "/candidates" },
    ],
  },
  {
    Services: [
      { name: "Terms", href: "/terms" },
      { name: "Offers", href: "/offers" },
      { name: "Privacy", href: "/privacy" },
      { name: "Service", href: "/services" },
    ],
  },
  {
    Connect: [
      { name: "Email", href: "mailto:applyremotelyjobs@gmail.com" },
      { name: "twitter", href: "https://twitter.com/applyremotely" },
      { name: "Contact us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="flex-col bg-[#0A142F] text-white pt-10 pb-10 mt-10">
        <section className="text-center">
          <Newsletter />
          <h3 className="w-4/6 ml-16 font-semibold font-sans mb-8 whitespace-normal my-6 text-center text-xl lg:w-3/12 sm:hidden">
            Overcome Ignorance and apply for Remote Jobs
          </h3>
          <div className="my-6 lg:flex lg:flex-row lg:gap-32 lg:justify-center">
            {button.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-white outline-white-4 outline text-xl  hover:border-blue-800 hover:bg-white hover:text-[#0A142F] px-5 py-2 rounded-md mr-5 mt-5"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-row mx-6 gap-6 lg:gap-80 lg:justify-center">
            {items.map((item, index) => {
              return (
                <div key={index} className="flex flex-col mr-5 mt-5">
                  <h3 className="text-xl font-bold border-b-4 border-blue-600 pb-1.5">
                    {Object.keys(item)}
                  </h3>
                  <ul className="mt-5">
                    {Object.values(item).map((value) => {
                      return value.map((item, index) => (
                        <li key={index} className="mt-2">
                          <Link
                            to={item.href}
                            className="flex hover:border-b-2 hover:border-blue-800 "
                          >
                            {item.name}
                          </Link>
                        </li>
                      ));
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
        <div className="text-center mt-12">
          All Rights reserved Apply Remotely Jobs @copyright 2023
        </div>
      </footer>
    </>
  );
}
