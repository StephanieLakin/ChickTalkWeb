import React from "react";
import styles from "../style";
import { img } from "../constants";

// import StartBlogging from "../components/StartBlogging";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mt-20`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-10 mb-5 ">
        {/* <img src={img.nesting} alt="nesting" className="w-[32px] h-[32px]" /> */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Group </span>Therapy For{" "}
          <span className="text-white">the Chicken </span>Obsessed
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[3rem] lg:text-[5rem] text-white ss:leading-[100.8px] leading-[75px]">
          Welcome<br className="sm:block hidden" />{" "} to 
          <span className="text-gradient"> ChickTalk</span>{" "}
        </h1>
        
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Chickens have become a popular obsession for many reasons, including
        their relatively low cost and ease of care, their versatility as both
        pets and a source of food, and the popularity of backyard and urban
        homesteading. Additionally, chickens have unique and charming
        personalities, which have endeared them to many people. Some people also
        find raising chickens to be a relaxing and fulfilling hobby. All of
        these factors have combined to make chickens a widespread obsession.
      </p>
      <h1 className="font-poppins font-semibold ss:text-[3rem] lg:text-[5rem] text-white ss:leading-[100.8px] leading-[75px] w-full">
        We Share <br className="sm:block hidden" />{" "} your <span className="text-gradient">Obsession</span>
      </h1>     
    </div>

    {/* <div
      className={`flex-1 flex ${styles.flexCenter} place-content-center `}
    > */}
     <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 sm:mr-12 sm:ml-0 
      xs:mr-20 xs:ml-0 items-center relative`}>
      <img
        src={img.nesting}
        alt="nestbox"
        className="w-[100%] h-[auto] sm:w-[auto] px-6 sm:mr-12 sm:ml-0       
         relative z-[1] rounded-full drop-shadow-md contrast-150 "
      />

      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>
    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div> */}
  </section>
);

export default Hero;
