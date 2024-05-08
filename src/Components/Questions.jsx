import React from "react";
import plus from "../assets/plus.png";
import minus from "../assets/minus-sign.png";
import { useState } from "react";

function Questions({ question, answer, key }) {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative w-full py-3" id={key}>
      <p className="font-medium text-[18px] text-manrope py-2 w-10/12">
        {question}
      </p>
      <img
        src={toggle ? minus : plus}
        alt=""
        className="absolute right-0 top-[26px] w-4 cursor-pointer "
        onClick={handleClick}
      />
      {toggle && (
        <div className="py-3">
          <p className="text-[15px] text-#9E9D9D w-10/12">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default Questions;
