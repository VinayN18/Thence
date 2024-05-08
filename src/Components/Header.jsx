import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="flex row justify-between items-center w-11/12 m-auto rounded-full px-8 py-3 border-2 my-3  relative">
      <img src={Logo} alt="" className="w-20" />
      <Stack direction="row" spacing={4} align="center" className="z-50">
        <button
          className="text-manrope px-6 hover:bg-#EAEAEA py-3 border-2 rounded-full border-[1px] font-[18px] w-52"
          onClick={handleClick}
        >
          Get Projects
        </button>
        <button className="text-manrope bg-slate-950 hover:bg-#454444 text-white px-6 py-3 font-[18px] border-[1px] rounded-full w-52">
          Onboard Talent
        </button>
      </Stack>
    </div>
  );
}

export default Header;
