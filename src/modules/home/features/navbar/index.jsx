import React from 'react'
import caret from "../../assets/caret.svg"

export default function Navbar() {
  return (
    <div className="px-[20%] text-white">
      <div>
        <nav className="h-[12vh] w-full flex justify-between  items-center ">
          <div className="flex items-start ">
            <h4 className="font-michroma text-xl h-[41px] px-10 border-b border-primary">
              GET ACCESS
            </h4>
            <div className="h-[41px] mt-2">
              <img src={caret} className="w-[30px]" alt="caret" />
            </div>
          </div>
          <h4 className="text-[45px] font-nico ">WEB3</h4>
          <div className="flex items-start ">
            <h4 className="font-michroma text-xl h-[41px] px-10 border-b border-primary">
              BUY & SELL
            </h4>
            <div className="h-[41px] mt-2">
              <img src={caret} className="w-[30px]" alt="caret" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
