import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { PiCubeLight } from "react-icons/pi";

const Home = () => {
  return (
    <div className="main-home-container text-gray-700">
      <section className="text-gray-600 body-font bg-red-600">
        <h1 className="md:text-2xl p-4 text-gray-100">
          Unleash Your Creativity in the 3rd Dimension!
        </h1>
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
                <Link to="https://forms.gle/YmtCyFkmBVUTemXK9">Register</Link>
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

      <section className="my-10 text-xl">
        <div>
          <h1 className="text-3xl my-8">Event details</h1>
          <p className="m-2 text-xl">venue: DTL Huddle</p>
          <p className="m-2 text-xl">date: 27/01/2024</p>
        </div>
        <div>
          <p className="m-3">
            Everyone is invited to witness the event and explore the world of 3D
            printers.*{" "}
          </p>
        </div>
      </section>

      <section className="my-10 flex flex-col justify-center items-center md:w-11/12 md:m-auto">
        <h1 className="md:text-4xl text-3xl my-8 ">About the contest</h1>
        <div className="m-5 p-2 flex flex-col items-start ">
          <p className="text-center mb-4 md:text-2xl text-xl">
            Welcome to Printovation Enchantment, a groundbreaking 3D printing
            workshop designed to ignite your imagination and bring your ideas to
            life! Join us for an immersive experience where innovation meets
            hands-on learning.
          </p>
          <div className="md:border-4 md:rounded-2 md:px-6 md:py-4 px-4 py-2 my-8 md:my-12 text-center">
            <div>
              <h1 className="my-2 md:my-2 text-2xl py-2 text-red-600">
                Session 1: Learn and Create
              </h1>
              <div>
                <p className="md:text-left my-4 text-xl">
                  In the first session, dive deep into the world of 3D modeling.
                  Receive a unique problem statement and design a solution using
                  CAD. Our expert instructors will guide you every step of the
                  way.
                </p>
              </div>
            </div>
            <div>
              <h1 className="my-2 md:my-2 text-2xl py-2 pt-12 text-red-600">
                Session 2: Printer 101
              </h1>
              <div>
                <p className="md:text-left my-4 text-xl">
                  Knowledge is key! In the second session, get a comprehensive
                  overview of different types of 3D printers, understand their
                  inner workings, and unravel the intricacies of slicing and
                  Cura. Equip yourself with the skills needed for the hands-on
                  challenge ahead.
                </p>
              </div>
              <div>
                <h1 className="my-2 md:my-2 text-2xl py-2 pt-12 text-red-600">
                  Session 3: Race Against Time & Contest
                </h1>
                <div>
                  <p className="md:text-left my-4 text-xl">
                    Feel the adrenaline as you navigate a 30-minute time
                    constraint to print your masterpieces. Only the best designs
                    from the first session are selected for this challenge. The
                    top three printed models will be crowned champions with
                    exciting prizes. This is your moment to shine!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col border-4 rounded-lg px-2 py-0">
            <p className="md:text-left mt-4 text-3xl md:text-2xl md:text-red-600 md:w-1/3 ">
              Completion Certificate
            </p>
            <p className="md:text-left my-4 text-xl ">
              Upon successful completion of the workshop, participants will be
              awarded a certificate, showcasing their achievement and upskilling
              in the field of 3D printing
            </p>
          </div>
          <div className="flex flex-col justify-center items-start text-xl">
            <h1 className="mb-4 mt-12 text-3xl px-4 py-2 ">
              Registration Details
            </h1>
            <div className="flex md:flex-row flex-col md:w-full">
              <p className="md:text-left my-4 text-xl text-red-600 md:w-1/4">
                Entry Fee
              </p>
              <p className="text-center my-4 md:ml-2 p-0">
                300 rupees per team(max- 2 students per team)
              </p>
            </div>
            <div className="flex md:flex-row flex-col w-full">
              <p className="md:text-left my-4 text-xl text-red-600 md:w-1/4">
                Registration Deadline
              </p>
              <p className="text-center my-4 text-xl md:ml-2">
                25th January 2024
              </p>
            </div>
            <p className="mx-0 mt-12 text-center my-4 md:ml-2">
              Secure your spot today and let your creativity take flight at
              Printovation Enchantment!
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h1 className="text-3xl my-3">Contact Us</h1>
        <div className="flex md:flex-row flex-col lg:w-5/6 m-auto w-full ">
          <div className="md:p-4 sm:w-1/2 w-full mx-2 my-2">
            <h2 className="md:mx-2 p-2 text-xl text-start">FACULTY ADVISORS</h2>
            <div className="border-2 border-gray-500 md:px-4 px-2 flex flex-col py-4">
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900 text-base">
                  Dr. BHARATISH A
                </h2>
                <p className="leading-relaxed text-red-500">+91 9538288686</p>
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
            <div className="border-2 border-gray-500 md:px-4 px-2 flex flex-col py-4">
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900 text-base">
                  VINEETH RAO
                </h2>
                <p className="leading-relaxed text-red-500">+91 8217684886</p>
              </div>
              <div className="items-start mb-2 text-md">V Semester</div>
              <div className="px-4 md:px-2 py-2 flex flex-row justify-between items-center">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  KUNAL RATHODE
                </h2>
                <p className="leading-relaxed text-red-500">+91 90190 44492</p>
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
