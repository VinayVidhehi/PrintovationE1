import React from "react";
import Marquee from "react-fast-marquee";
import week_one_poster from "./Images/wip.jpeg";
import week_one_submission from "./Images/wiwp.jpeg";
import week_one_reward from "./Images/wiw.jpeg";
import week_one_winner from "./Images/wiwwp.jpeg";
import w21 from "./Images/w21.jpg";
import w22 from "./Images/w22.jpg";
import w23 from "./Images/w23.jpg";
import w24 from "./Images/w24.jpg";
import w25 from "./Images/w25.jpg";
import w26 from "./Images/w26.jpg";
import w27 from "./Images/w27.jpg";
import w28 from "./Images/w28.jpg";
import w29 from "./Images/w29.jpg";
import w210 from "./Images/w210.jpg";
import w211 from "./Images/w211.jpg";

const EventWinner = () => {
  return (
    <div>
      <section>
        <div className="mx-auto flex items-center justify-center w-5/6 my-8 md:mt-24">
          <div className="h-16 w-full md:w-1/4 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div className="flex h-full w-full items-center justify-center bg-white back">
              <h1 className="text-2xl font-sans font-semibold">W1 WINNER</h1>
            </div>
          </div>
        </div>
        <p className="text-xl text-red-600 my-8 font-semibold">
          {" "}
          Congratulations Subramanya!
        </p>
        <Marquee className="w-5/6 m-auto ">
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={week_one_poster} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={week_one_submission} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={week_one_winner} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={week_one_reward} alt="img" />
          </div>
        </Marquee>
      </section>

      <section>
        <div className="mx-auto flex items-center justify-center w-5/6 mt-8 md:mt-16">
          <div className="h-16 w-full md:w-1/4 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div className="flex h-full w-full items-center justify-center bg-white back">
              <h1 className="text-2xl font-sans font-semibold">W2 WINNER</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 m-6">
          <p className="text-xl text-red-600 mb-8 font-semibold">
            {" "}
            Congratulations Hari Krishna Baiju and Stephen Lobo!
          </p>
          <div className="p-4 mx-4 md:mx-12 border-gray-400 border-2 rounded-sm">
            <img className="h-60" src={w210} alt="img" />
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center w-5/6 mt-8 md:mt-16">
          <div className="h-16 w-full md:w-1/4 rounded-md bg-gradient-to-r from-gray-700 via-gray-400 to-gray-900 p-1">
            <div className="flex h-full w-full items-center justify-center bg-white back">
              <h1 className="text-2xl font-sans font-semibold">W2 SUBMISSIONS</h1>
            </div>
          </div>
        </div>
        <Marquee className="w-5/6 m-auto my-12">
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w21} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w22} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w23} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w24} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w25} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w26} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w27} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w28} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w29} alt="img" />
          </div>
          <div className="p-4 mx-4 md:mx-12 border-gray-300 border-2 rounded-md">
            <img className="h-60" src={w211} alt="img" />
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default EventWinner;
