import React from 'react';
import styles from '../style';
import { img } from "../constants";


const CR_Button = () => (
    <div className={`${styles.flexCenter} 
    w-[110px] h-[110px]  hover:animate-bounce
    rounded-full bg-green-gradient 
    p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter}
      flex-col bg-primary w-[100%] h-[100%]  rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
       
          <a href="#coops&Runs">
            <p  className='font-poppins font-medium text-[18px] leading-[23px]mr-2'>
            <span className="text-gradient">Coops</span>          
          </p>
          <img src={img.arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain ml-1"/>
          </a>
        
          </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className="text-gradient">& Runs</span>           
          </p>
          
      </div>
    </div>
  )


export default CR_Button
