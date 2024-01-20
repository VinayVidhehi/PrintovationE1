import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { PiCubeLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="main-home-container">
      <section className="text-gray-600 body-font bg-red-600">
      <h1 className="text-2xl p-4 text-gray-300">E 1.0</h1>
        <div className="container mx-auto flex px-5 py-10 lg:py-28 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
            <span
              id="box"
              className="material-symbols-outlined text-10xl lg:text-20xl font-thin text-white"
            >
              <PiCubeLight id="bbox" className="font-thin" />
            </span>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              A hands-on 3D printing experience and Contest
            </h1>
            <p className="mb-6 p-4 leading-relaxed border-2 border-white text-white text-xl">
              please read the guidelines before registering to the contest
            </p>
            <p className="mb-2 leading-relaxed text-white">
              click here to register
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center bg-white border-0 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                <Link to="/contact">Register</Link>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div>
          <h1 className="md:text-3xl text-xl my-3">Event details</h1>
           <p className="m-2">venue: DTL Huddle</p>
           <p className="m-2">date: 25/01/2024</p>
        </div>
        <div>
          <p className="m-3">Everyone are welcome to witness the event and experience 3d printers* </p>
        </div>
      </section>

      <section className="my-10">
        <h1 className="md:text-3xl text-xl my-3">About the contest</h1>
        <div className="m-5 p-2 flex flex-col items-start ">
          <div>
            <h1>Session 1</h1>
            <div>
              <p>paragraph 1</p>
            </div>
          </div>
          <div>
            <h1>Session 2</h1>
            <div>
              <p>paragraph 1</p>
            </div>
            <div>
              <h1>Session 3</h1>
              <div>
                <p>paragraph 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h1 className="md:text-3xl text-xl my-3">Guidelines for the contest</h1>
        <div className="m-5 p-2 flex flex-col items-start ">
          <ul className="m-2 p-2 md:m-5">
            <li className="md:py-2 text-left md:mx-1 py-1">
              A maximum team size of two is allowed
            </li>
            <li className="md:py-2 text-left md:mx-1 py-1">
              Members of one team, after elimination, cannot participate in any
              other team later
            </li>
            <li className="md:py-2 text-left md:mx-1 py-1">
              A maximum team size of two is allowed
            </li>
            <li className="md:py-2 text-left md:mx-1 py-1">
              A maximum team size of two is allowed
            </li>
            <li className="md:py-2 text-left md:mx-1 py-1">
              A maximum team size of two is allowed
            </li>
          </ul>
        </div>
      </section>

      <section className="my-10">
        <h1 className="text-3xl my-3">Contact Us</h1>
        <div className="flex md:flex-row flex-col lg:w-5/6 m-auto w-full ">
          <div className="md:p-4 sm:w-1/2 w-full mx-2 my-2">
            <h2 className="md:mx-2 p-2 text-xl text-start">FACULTY ADVISORS</h2>
            <div className="border-2 border-gray-500 md:px-4 px-2 flex flex-col py-4 bg-gray-200">
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900 text-base">
                  Dr. BHARATISH A
                </h2>
                <p className="leading-relaxed text-red-500">+91 9886127398</p>
              </div>
              <div className="items-start mb-2 text-md">
                Assistant Professor
              </div>
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Dr. B G RAJKUMAR
                </h2>
                <p className="leading-relaxed text-red-500">+91 9844755956</p>
              </div>
              <div className="items-start mb-2 text-md">
                Assistant Professor
              </div>
            </div>
          </div>

          <div className="md:p-4 sm:w-1/2 w-full mx-2 my-2">
            <h2 className="md:mx-2 p-2 text-xl text-start">
              STUDENT COORDINATORS
            </h2>
            <div className="border-2 border-gray-500 md:px-4 px-2 flex flex-col py-4 bg-gray-200">
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900 text-base">
                  VINAY KUMAR
                </h2>
                <p className="leading-relaxed text-red-500">+91 8618825541</p>
              </div>
              <div className="items-start mb-2 text-md">V Semester</div>
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  VINEETH RAO
                </h2>
                <p className="leading-relaxed text-red-500">+91 9108219577</p>
              </div>
              <div className="items-start mb-2 text-md">II Semester</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
