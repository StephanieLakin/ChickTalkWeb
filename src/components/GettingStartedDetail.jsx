import React from "react";
import styles from "../style";
import { img } from "../constants";
import CR_Button from "../components/CR_Button";


const GettingStartedDetail = () => (
  <section
    id="gettingStartedDetail"
    className={`flex md:flex-row flex-col ${styles.paddingY} mt-20`}
  >
    <div
       className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
      
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Which comes first,</span>{" "}
          <span className="text-white">the chicken or the </span>coop?
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          First Things  <br className="sm:block hidden" />{" "}
          <span className="text-gradient">First...</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 z-[3] relative left-[60%] bottom-[20%]">
          <CR_Button />
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
    </div>

    <div className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 sm:mr-12 sm:ml-0       
      xs:mr-20 xs:ml-0 items-center relative`}>
      <img
        src={img.babies}
        alt="babies"     
        className="w-[60rem] h-[auto] px-6 sm:mr-12 sm:ml-0
        relative z-[1] rounded-full drop-shadow-md contrast-150"
      />      
    </div>

  </section>
);

export default  GettingStartedDetail;