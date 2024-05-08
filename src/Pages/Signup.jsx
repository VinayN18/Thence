import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom';
import { RiErrorWarningLine } from "react-icons/ri";

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate =useNavigate();

    useEffect(() => {
    if (name.trim() !== '' && email.trim() !== '') {
        setButtonDisabled(false);
    } else {
        setButtonDisabled(true);
    }
    }, [name, email]);


  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if(isValidEmail(email)){
        setError('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
        setError('Enter a valid email address');
        return;
      }
    console.log('Name:', name);
    console.log('Email:', email);
    navigate('/success');
  }

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleClose = () => {
    navigate('/');
  }
  
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='sticky w-full flex flex-row justify-between pt-8 sm:px-12 px-8 items-center'>
        <img src={Logo} alt="" className="w-28" />
        <div class="border-[#CACACA] border-2 rounded-full sm:p-5 p-3 cursor-pointer" onClick={handleClose}>
        <RxCross1 />
        </div>
      </div>
      <div className='flex flex-col items-center my-auto justify-center sm:w-[588px] mx-auto text-center'>
          <p className='text-#2DA950 font-grace text-grace text-[24px]'>Registration Form</p>
          <p className='text-[#1C1C1C] font-semibold text-manrope sm:text-[56px] text-[30px] px-3 leading-tight'>Start your success Journey here!</p>
          <input value={name}
            onChange={handleNameChange}
            className='sm:py-[24px] py-[16px] px-[36px] bg-[#EFEFEF] outline-none rounded-full sm:w-2/3 w-3/4 sm:mt-12 mt-7 text-#827A7A text-[18px]' placeholder='Enter your name' type='text'/>
          <input value={email}
            onChange={handleEmailChange}
             className={`sm:py-[24px] py-[16px] px-[36px] ${error===''?'bg-[#EFEFEF]':'bg-[#F5F8FF] border-[#537FF1] border-[1px]'} outline-none rounded-full sm:w-2/3 w-3/4 mt-5 text-#827A7A text-[18px]`} placeholder='Enter your email' type='text'/>
             {
                error &&  <div className='flex flex-row w-2/3 items-center mt-2'>
                    <RiErrorWarningLine className="text-[#FF0808] mr-2"/> 
               <p className="text-[#FF0808] ">{error}</p>
                </div>
             }
          <button disabled={buttonDisabled} onClick={handleSubmit} className={`sm:py-[24px] py-[16px]  px-[36px]  outline-none rounded-full sm:w-2/3 w-3/4 sm:mt-8 mt-5  text-[18px] text-white ${buttonDisabled?'bg-[#C9C9C9] cursor-not-allowed':'bg-[#1C1C1C]'} `}>Submit</button>
      </div>
    </div>
  )
}
