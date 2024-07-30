import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";
import tonimage from "../../public/images/ton.png";
import shadow from "../../public/images/shadow-blue.png";

export default function Hero() {
  return (
    <div className="Container mt-10">
      <div className="bg- py-24 -mt-24 bg-shadow z-10">
        <div className="text-center text-2xl pt-8">TON Rewards</div>
        <div className="text-[100px] font-semibold flex items-center mx-auto justify-center text-center gap-2">
          <img src={tonimage} alt="ton" className="h-16 w-auto" />
          <div>0.01</div>
        </div>
        <a href="" className="text-center mx-auto flex justify-center text-yellow-500 -mt-5">
          Withdraw {">"}
        </a>
      </div>
      <div>
        <div className="text-lg mb-5 font-semibold">Tasks <span className="text-white/50"> (1/5)</span></div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">{">"}</div>
            <div>
              <div>Address Verification</div>
              <div className="text-white/50">+0.1 TON</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white text-black rounded-full">Start</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">{">"}</div>
            <div>
              <div>Follow us on X</div>
              <div className="text-white/50">+0.01 TON</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white text-black rounded-full">Start</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">{">"}</div>
            <div>
              <div>RT our post on X</div>
              <div className="text-white/50">+0.01 TON</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white text-black rounded-full">Start</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">{">"}</div>
            <div>
              <div>Subscribe TONBOX Channel</div>
              <div className="text-white/50">+0.02 TON</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white text-black rounded-full">Start</div>
        </div>
        <div id="task-main" className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-white/10 text-center justify-center items-center flex rounded-full">{">"}</div>
            <div>
              <div>Invite 5 Friends <span className="text-white/50">(0/5)</span></div>
              <div className="text-white/50">+0.5 TON</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-white text-black rounded-full">Start</div>
        </div>
      </div>
    </div>
  );
}
