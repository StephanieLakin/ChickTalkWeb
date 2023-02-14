import React from "react";
import styles from "../style";
import { img } from "../constants";
import GS_Button from "../components/GS_Button";

// import StartBlogging from "../components/StartBlogging";

const GettingStarted = () => (
  <section id="gettingStarted" className={`flex md:flex-row flex-col ${styles.paddingY} md:w-full`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
          
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        {/* <img src={img.nesting} alt="nesting" className="w-[32px] h-[32px]" /> */}
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Backyard </span>Chickens{" "}
          <span className="text-white">are an egg-cellent </span>idea.
        </p>       
      </div>
      
      <div className="flex flex-row justify-between items-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Still<span className="text-gradient"> Debating?</span>{" "}
        </h1> 
        <div className="ss:flex hidden md:mr-4 mr-0 z-[3] relative left-[60%] bottom-[10%]">
          <GS_Button />
        </div>      
      </div>            
      <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
        Everyone should have chickens because they are fun, affordable, and provide numerous
        benefits. Chickens are low-maintenance pets that bring joy to their
        owners with their quirky personalities. They also provide fresh eggs and
        fertilizer for your garden, making them a great addition to any backyard
        or urban homestead. Additionally, raising chickens is a great way to
        educate children about where their food comes from and can foster a
        deeper appreciation for nature. So why not give chickens a chance and
        experience the many rewards that come with having these feathered
        friends in your life?
      </p> 
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full mb-10">
       Getting Started is <span className="text-gradient">Easy</span>
      </h1> 
      
    </div>
    
    <div
      className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 sm:mr-12 sm:ml-0       
      xs:mr-20 xs:ml-0 items-center relative`}>     
      <img
        src={img.eggs}
        alt="eggs"
        className="w-[100%] h-[auto] sm:w-[auto] px-6 sm:mr-12 sm:ml-0
        relative z-[1] rounded-full drop-shadow-md contrast-150"
      />  
    </div>       
  </section>
  
);

export default GettingStarted;
