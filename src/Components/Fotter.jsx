import { Stack } from "@chakra-ui/react";
import React from "react";

function Fotter() {
  return (
    <div className="flex row justify-between items-center w-11/12 m-auto rounded-2xl px-8 py-12 my-6  relative bg-#F5F5F5">
      <p className="font-medium ">© Talup 2023. All rights reserved</p>
      <Stack direction="row" spacing={10} align="center" className="z-50">
        <p className="text-manrope  text-[18px] underline">
          Terms & Conditions
        </p>
        <p className="text-manrope text-[18px] underline">Privacy Policy</p>
      </Stack>
    </div>
  );
}

export default Fotter;
