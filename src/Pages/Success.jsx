import React, { useEffect, useState } from 'react'
import Logo from "../assets/Logo.png";
import Frame from "../assets/Frame.png";
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const [countDown,setCountDown]=useState(5);
    const navigate=useNavigate()
    useEffect(() => {
        if (countDown === 0) {
          navigate("/")
        }
        const timer = setInterval(() => {
          setCountDown((prevCountDown) => prevCountDown - 1);
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, [countDown]);

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='sticky w-full flex flex-row justify-between pt-8 sm:px-12 px-8 items-center'>
        <img src={Logo} alt="" className="w-28" />
      </div>
      <div className='flex flex-col items-center justify-center md:w-[718px] flex-1 mx-auto text-center '>
          <div className='flex-1 flex flex-col items-center justify-center '>
            <img src={Frame} alt="" className="w-24" />
          <p className='text-#2DA950 text-grace font-grace text-[24px]'>Success Submitted</p>
          <p className='text-[#1C1C1C] text-manrope font-semibold sm:text-[56px] text-[40px] px-3 leading-tight'>Congratulations</p>
          <p  className='text-[#727272] sm:text-[26px] text-[20px] px-3 mt-5 leading-8'>Your request has been successfully submitted to us.
             We will validate your information and reach out to your shortly with updates</p>
          </div>
          <div className='py-6 text-[#727272]'>Redirecting you to Homepage in <span className='text-[#1C1C1C] font-semibold'>{countDown} Seconds</span> </div>
      </div>
    </div>
  )
}
