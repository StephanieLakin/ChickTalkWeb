import React from "react";
import styles from "../style";
import { img } from "../constants";

// import StartBlogging from "../components/StartBlogging";

const GettingStartedDetail = () => (
  <section
    id="getStartedDetail"
    className={`flex md:flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        {/* <img src={img.nesting} alt="nesting" className="w-[32px] h-[32px]" /> */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Which comes first? </span>?{" "}
          <span className="text-white">the chicken or the </span>coop?
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          First Things  <br className="sm:block hidden" />{" "}
          <span className="text-gradient">First...</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          {/* <GetStarted /> */}
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To get started with backyard chickens, you will need a coop that is
        sturdy and secure to provide protection for your birds at night.
        Additionally, you will need a run, which is an enclosed area for them to
        move around and get fresh air during the day. You will also require
        containers to hold food and water, as well as a good quality feed that
        is specifically formulated for chickens. Bedding material, such as straw
        or wood chips, is necessary to line the floor of the coop and absorb
        moisture, as well as provide insulation. Nesting boxes will give your
        hens a place to lay eggs, and if you live in a location with short
        daylight hours in winter, you may need to provide additional light to
        keep your chickens laying. Lastly, you will need to obtain healthy
        chickens to start your backyard flock.
      </p>
      {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Getting Started is <span className="text-gradient">Easy</span>
      </h1> */}
      {/* <div className="ss:flex hidden md:mr-4 mr-0"> */}
        {/* <GetStartedButton /> */}
      {/* </div> */}
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} `}>
      <img
        src={img.eggs}
        alt="eggs"
        className="w-[100%] h-[75%]
         relative z-[5] rounded-full drop-shadow-md contrast-150 "
      />
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      {/* gradient end */}
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* <GetStarted /> */}
    </div>
  </section>
);

export default  GettingStartedDetail;