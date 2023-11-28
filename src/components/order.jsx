import React from "react";
import musicImage from "../assets/images/illustration-hero.svg";
import musicicon from "../assets/images/icon-music.svg";

const Order = () => {
  return (
    <div className="w-[24rem] m-auto h-[38rem]   ">
      <div className="w-[100%]   m-auto ">
        <img className="rounded-t-2xl" src={musicImage} alt="icon" />
      </div>
      <div className="w-[100%]  m-auto text-center h-[24rem] bg-[#F5F7FF] rounded-b-2xl ">
        <div className="m-auto  ">
          <h1 className="pt-9 font-redhat text-[28px] font-[900] text-[#1F2F56]">
            Order Summary
          </h1>
          <p className="w-[19rem] mt-3 m-auto font-red font-[500] text-[#7280A7] text-base">
            You can now listen to millions of songs. audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex w-[20rem]  rounded-xl font-hat  h-[4rem] shadow-md m-auto mt-5 bg-[#F5F7FF]">
            <img
              className="w-12 h-12 my-auto mx-5 "
              src={musicicon}
              alt="music-icon"
            />
            <div className="my-auto">
              <p className=" font-[700] text-[#1F2F56] text-[15px]">
                Annual Plan
              </p>
              <p className="text-[#7280A7]">$59.99/year</p>
            </div>
            <h5 className=" my-auto ml-14 font-[700] underline flex-1 text-[#382AE0]">
              Change
            </h5>
          </div>
          <div className="mt-6 w-[20rem] drop-shadow-2xl text-[#E0E8FF] h-10 bg-[#382AE0] rounded-xl font-hat font-[700] text-sm m-auto  ">
            <h4 className="pt-2.5">Proceed to Payment</h4>
          </div>
          <p className="mt-5 text-[#7280A7] font-hat font-[700] ">
            Cancel Order
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
