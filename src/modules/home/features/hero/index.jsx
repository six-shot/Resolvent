
import React from "react";
import hero from "../../assets/hero2.gif"
import Navbar from "../navbar";

export default function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="relative w-full h-[100vh] text-white">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center z-20 mt-[16vh] ">
          <img className=" z-10 " src={hero} alt="hero" />
          <h4 className="uppercase text-[128px] font-dela -mt-[20%] relative z-[30]">
            Resolvent
          </h4>
          <h5 className="uppercase text-lg font-khyay text-center relative z-[30] mt-[7%]">
            "Resolvent: Where scarcity meets solution, empowering collectors
            with access to unique digital treasures."
          </h5>
        </div>

        <div className="absolute top-0 left-0 z-[100] w-full">
          <Navbar />
        </div>
        <div className=" mt-[20vh] absolute top-0 left-0 w-full  flex  justify-between  z-20 px-[5%]">
          <div className="font-syncopate">
            <h4 className="text-[30px]">
              <span className="text-primary">
                "Web3: Unlock NFTs,
                <br /> Secure
              </span>
              <br /> Transactions”
            </h4>
            <div className="flex flex-col">
              <h4 className="text-[70px] font-nico leading-[55px]">WEB3</h4>
              <h4 className="text-[70px] font-nico leading-[55px]">WEB3</h4>
              <h4 className="text-[70px] font-nico leading-[55px]">WEB3</h4>
              <h4 className="text-[70px] font-nico leading-[55px]">WEB3</h4>
            </div>
          </div>
          <div className="w-[334px] font-khyay">
            <h4 className="text-xl">
              {" "}
              "explore Web3's world where you can seamlessly connect, buy, and
              sell NFTs, while enjoying secure, blockchain-backed transactions
              through your crypto wallet.{" "}
              <span className="text-primary">
                {" "}
                Our user-friendly platform ensures data immutability with
                minimal gas prices, making it the ideal gateway to the future of
                digital assets.
              </span>
              "
            </h4>
            <button className="font-goldman text-[28px] h-[41px] mt-5  border-b border-primary">
              GET ACCESS
            </button>
          </div>
        </div>
        <div className="absolute bottom-[1%] left-0 flex items-center justify-center z-[20] w-full">
          {/* <h4 className="uppercase text-[128px] font-dela">Resolvent</h4> */}
        </div>
        {/* <div className="absolute bottom-[2%] left-0 flex items-center justify-center z-[20] w-full">
          <h5 className="uppercase text-lg font-khyay text-center">
            "Resolvent: Where scarcity meets solution, empowering collectors
            with access to unique digital treasures."
          </h5>
        </div> */}
      </div>
    </div>
  );
}
