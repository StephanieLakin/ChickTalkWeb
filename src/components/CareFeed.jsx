import React from "react";
import styles from "../style";
import { img } from "../constants";
import LM_Button from "../components/LM_Button";

const CareFeed = () => {
  return (
    <section
      id="careFeed"
      className={`flex md:flex-row flex-col ${styles.paddingY} md:w-full`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5">
          {/* <img src={img.nesting} alt="nesting" className="w-[32px] h-[32px]" /> */}
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Taking </span>Care{" "}
            <span className="text-white">of our feathered </span>friends.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Care & <span className="text-gradient">Feeding</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 z-[3] relative left-[60%] bottom-[10%]">
            <LM_Button />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
          To keep your chickens healthy, it's important to provide them with a
          balanced diet, clean and dry living conditions, and regular veterinary
          check-ups. Also, it's important to keep an eye out for any signs of
          illness or distress, and address any issues as soon as possible. It's
          important to note that many chicken health issues can be prevented
          through proper management, nutrition and sanitation. Regular cleaning
          of the coop, providing fresh water and feed, and maintaining the
          correct temperature and humidity levels in the coop can all help keep
          chickens healthy.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
          The best way to feed backyard chickens is to provide them with a
          nutritionally balanced diet that includes a mix of commercial chicken
          feed, fresh fruits and vegetables, and clean water. It's important to
          choose a high-quality commercial feed that is appropriate for the
          chickens' age and stage of development, and to supplement it with a
          variety of fresh produce and other treats. Additionally, it's
          important to provide clean water at all times and to ensure that the
          chickens have access to grit, which they need to properly digest their
          food.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter}md:my-0 my-10 sm:mr-12 sm:ml-0       
      xs:mr-20 xs:ml-0 items-center relative`}
      >
        <img
          src={img.chickens}
          alt="chickens"
          className="w-[100%] h-[auto] sm:w-[auto] px-6 sm:mr-12 sm:ml-0
        relative z-[1] rounded-full drop-shadow-md contrast-150"
        />
      </div>
    </section>
  );
};

export default CareFeed;
