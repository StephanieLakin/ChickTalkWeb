import React from "react";
import styles from "../style";
import { img } from "../constants";
import LM_Button from "../components/LM_Button";

const CoopsRuns = () => (
  <section
    id="coops&Runs"
    className={`flex md:flex-row flex-col ${styles.paddingY} mt-20`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5">
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">To Buy or Build,</span>{" "}
          <span className="text-white">that is the </span>Question.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Coops and <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Runs</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 z-[3] relative left-[60%] bottom-[10%]">
          <LM_Button />
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Prefab coops can vary in price, but generally, they are more expensive
        than building your own coop. Consider your budget and how much you are
        willing to spend. Building your own chicken coop takes time and effort.
        If you have limited time available, a prefab coop may be a better option
        since it requires less time and work. Building a chicken coop requires
        some level of skill and knowledge. If you have experience in woodworking
        and construction, you may be able to build a coop yourself. However, if
        you lack the necessary skills, a prefab coop may be a better choice. If
        you have specific requirements for your chicken coop, such as a certain
        size or style, building your own coop may allow you to customize it to
        your liking. Prefab coops may have limitations in terms of design and
        customization. Consider these factors and decide which option works best 
        for you based on your personal situation and preferences.
        </p>
    </div>

    <div
      className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 sm:mr-12 sm:ml-0       
      xs:mr-20 xs:ml-0 items-center relative`}
    >
      <img
        src={img.chickenInCoop}
        alt="babies"
        className="w-[60rem] h-[auto] px-6 sm:mr-12 sm:ml-0
        relative z-[1] rounded-full drop-shadow-md contrast-150"
      />
    </div>
  </section>
);

export default CoopsRuns;
