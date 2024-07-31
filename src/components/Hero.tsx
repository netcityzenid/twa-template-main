import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";
import tonimage from "../../public/images/ton.png";
import shadow from "../../public/images/shadow-blue.png";

export default function Hero() {
  return (
    <div className=" mt-10 font-mono px-5 pb-40">
      <div className=" py-24 -mt-24 bg-shadow z-10">
        <div className="text-center text-2xl pt-8 text-white">TON Rewards</div>
        <div className="text-[100px] font-semibold flex items-center mx-auto justify-center text-center gap-2">
          <img src={tonimage} alt="ton" className="h-16 w-auto" />
          <div className="text-white">0.01</div>
        </div>
        <a href="" className="text-center mx-auto flex justify-center text-yellow-500 -mt-5">
          Withdraw {">"}
        </a>
      </div>
      <div>
        <div className="text-lg mb-5 font-semibold text-white">
          Tasks <span className="text-white/50"> (1/5)</span>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Address Verification</div>
              <div className="text-white/50">+0.1 TON</div>
            </div>
          </div>
          <div className="px-4 py-1.5  text-white rounded-full text-sm">Done !</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="h-5 w-auto">
                <g fill="#ffffff">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Follow us on X</div>
              <div className="text-white/50">+0.01 TON</div>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-white text-black rounded-full text-sm">Check</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="h-5 w-auto">
                <g fill="#ffffff">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">RT our post on X</div>
              <div className="text-white/50">+0.01 TON</div>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm">Start</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="h-5 w-auto">
                <g fill="#ffffff">
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M5.83,23.616c12.568,-5.529 28.832,-12.27 31.077,-13.203c5.889,-2.442 7.696,-1.974 6.795,3.434c-0.647,3.887 -2.514,16.756 -4.002,24.766c-0.883,4.75 -2.864,5.313 -5.979,3.258c-1.498,-0.989 -9.059,-5.989 -10.7,-7.163c-1.498,-1.07 -3.564,-2.357 -0.973,-4.892c0.922,-0.903 6.966,-6.674 11.675,-11.166c0.617,-0.59 -0.158,-1.559 -0.87,-1.086c-6.347,4.209 -15.147,10.051 -16.267,10.812c-1.692,1.149 -3.317,1.676 -6.234,0.838c-2.204,-0.633 -4.357,-1.388 -5.195,-1.676c-3.227,-1.108 -2.461,-2.543 0.673,-3.922z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">Subscribe TONBOX Channel</div>
              <div className="text-white/50">+0.02 TON</div>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm">Start</div>
        </div>
        <div id="task-main" className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" className="h-[18px] w-auto">
                <g
                  fill="#ffffff"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M20,0c-2.21094,0 -4,1.78906 -4,4c0,0.27734 0.03906,0.55078 0.09375,0.8125l-9.09375,4.5625c-0.73437,-0.83984 -1.79687,-1.375 -3,-1.375c-2.21094,0 -4,1.78906 -4,4c0,2.21094 1.78906,4 4,4c1.20313,0 2.26563,-0.53516 3,-1.375l9.09375,4.5625c-0.05469,0.26172 -0.09375,0.53516 -0.09375,0.8125c0,2.21094 1.78906,4 4,4c2.21094,0 4,-1.78906 4,-4c0,-2.21094 -1.78906,-4 -4,-4c-1.20312,0 -2.26562,0.53516 -3,1.375l-9.09375,-4.5625c0.05469,-0.26172 0.09375,-0.53516 0.09375,-0.8125c0,-0.27734 -0.03906,-0.55078 -0.09375,-0.8125l9.09375,-4.5625c0.73438,0.83984 1.79688,1.375 3,1.375c2.21094,0 4,-1.78906 4,-4c0,-2.21094 -1.78906,-4 -4,-4z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div>
              <div className="text-white font-semibold">
                Invite 5 Friends <span className="text-white/50">(0/5)</span>
              </div>
              <div className="text-white/50">+0.5 TON</div>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm">Start</div>
        </div>
      </div>
    </div>
  );
}
