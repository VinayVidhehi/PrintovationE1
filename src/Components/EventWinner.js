import React from "react";
import Marquee from "react-fast-marquee";
import week_one_poster from "./Images/wip.jpeg";
import week_one_submission from "./Images/wiwp.jpeg";
import week_one_reward from "./Images/wiw.jpeg";
import week_one_winner from "./Images/wiwwp.jpeg";

const EventWinner = () => {
  return (
    <div>
      <div className="mx-auto flex items-center justify-center w-5/6 my-8">
        <div className="h-16 w-full md:w-1/4 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-white back">
            <h1 className="text-2xl font-sans font-semibold">W1 WINNER</h1>
          </div>
        </div>
      </div>
      <p className="text-xl text-red-600 my-8 font-semibold"> Congratulations Subramanya!</p>
      <Marquee className="w-5/6 m-auto ">
        <div className="p-4 mx-8 md:mx-20 border-gray-300 border-2 rounded-md">
          <img className="h-60" src={week_one_poster} alt="img" />
        </div>
        <div className="p-4 mx-8 md:mx-20 border-gray-300 border-2 rounded-md">
          <img className="h-60" src={week_one_submission} alt="img" />
        </div>
        <div className="p-4 mx-8 md:mx-20 border-gray-300 border-2 rounded-md">
          <img className="h-60" src={week_one_winner} alt="img" />
        </div>
        <div className="p-4 mx-8 md:mx-20 border-gray-300 border-2 rounded-md">
          <img className="h-60" src={week_one_reward} alt="img" />
        </div>
      </Marquee>
    </div>
  );
};

export default EventWinner;
